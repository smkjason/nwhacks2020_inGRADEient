import imageio
import glob
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
from google.cloud import vision
import csv
import io
import operator

def load_images(img_path):
    im = imageio.imread(img_path)
    print(im)
    print(im.shape)
    print(im.dtype)
    imageio.imwrite('test.png', im[:, :, 0])


# @return ingredient_bounds_arr = "ingredient" : [(0,0), (1,0), (1,1), (0,1)]
def detect_text(path):
    """Detects text in the file."""
    client = vision.ImageAnnotatorClient()
    with io.open(path, 'rb') as image_file:
        content = image_file.read()
    image = vision.types.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations
    print('Texts:')

    # return values
    ingredient_bounds_dict = dict()
    buf = 0
    ingredient = dict()

    found_ingredient = False
    for text in texts:
        ingredient_name = text.description.lower()
        print('\n' + ingredient_name)
        
        if ('ingredient' in ingredient_name or 'contain' in ingredient_name) and not found_ingredient:
            found_ingredient = True
            ing_vertices = [{'x': vertex.x, 'y': vertex.y} for vertex in text.bounding_poly.vertices]
            pos_1, pos_2 = ing_vertices[0], ing_vertices[3]
            buf_tmp = (pos_2['y'] - pos_1['y']) / 4
            
            buf = buf_tmp if buf_tmp >= 1 else 1
            ingredient = pos_1
   
        vertices = [{'x': vertex.x, 'y': vertex.y} for vertex in text.bounding_poly.vertices]

        ingredient_bounds_dict[ingredient_name] = vertices[0]
    
    return buf, ingredient_bounds_dict, ingredient

def switch_key_val(ingredient_bounds_dict):
    return dict((str(pos['x']) + ',' + str(pos['y']) , name) 
                for name, pos in ingredient_bounds_dict.items())

def get_only_ingredients(buf, ingredient_bounds_dict, ingredient_obj):
    from_x, to_x = ingredient_obj['x'] - buf, ingredient_obj['x'] + buf
    from_y, to_y = ingredient_obj['y'] - buf, ingredient_obj['y'] + buf
    
    def check_bounds(obj):
        return from_x <= obj['x'] and from_y <= obj['y']

    new_dict = dict()
    for (name, pos) in ingredient_bounds_dict.items():
        if check_bounds(pos) and not ('ingredient' in name and len(name) > 15) and not 'contain' in name:
            new_dict[name] = pos

    return new_dict

def get_col(all_ingredients, ingredient_obj, buf):
    from_x, to_x = ingredient_obj['x'] - buf, ingredient_obj['x'] + buf
    from_y, to_y = ingredient_obj['y'] - buf, ingredient_obj['y'] + buf
    
    def check_bounds(obj):
        return from_x <= obj['x'] and obj['x'] <= to_x

    new_dict = dict()
    for (name, pos) in all_ingredients.items():
        if check_bounds(pos):
            new_dict[name] = pos

    return new_dict

def get_row(all_ingredients, ingredient_obj, buf):
    from_x, to_x = ingredient_obj['x'] - buf, ingredient_obj['x'] + buf
    from_y, to_y = ingredient_obj['y'] - buf, ingredient_obj['y'] + buf
    
    def check_bounds(obj):
        return from_y <= obj['y'] and obj['y'] <= to_y

    new_dict = dict()
    for (name, pos) in all_ingredients.items():
        if check_bounds(pos):
            new_dict[name] = pos
    return new_dict

def sort_col(col):
    name_y_dict = dict((k, v['y']) for (k, v) in col.items())
    sorted_arr = sorted(name_y_dict.items(), key=operator.itemgetter(1))
    sorted_dict = dict((name, col[name]) for (name, _) in sorted_arr)

    return sorted_dict

def sort_row(row_dict):
    print(row_dict)
    name_y_dict = dict((k, v['x']) for (k, v) in row_dict.items())
    sorted_arr = sorted(name_y_dict.items(), key=operator.itemgetter(1))
    sorted_dict = dict((name, row_dict[name]) for (name, _) in sorted_arr)

    return sorted_dict

def sort_all_ingredients(sorted_first_col_dict, all_ingredients, buf):
    print(sorted_first_col_dict)
    sorted_string = ''
    for name, pos in sorted_first_col_dict.items():
        row_dict = get_row(all_ingredients, pos, buf)
        sorted_row = sort_row(row_dict)
        # print(sorted_row)
        # print('\n')
        for (name, _) in sorted_row.items():
            sorted_string += name
    # print(sorted_string)

    return sorted_string

def separate_by_comma(sorted_ingredients_string):
    rawSplit = sorted_ingredients_string.split(",")
    ingredients = []
    for ingredient in rawSplit:
        ingredients.append(ingredient.strip())
    
    return ingredients

def verify_dataset(sorted_ingredients_arr):
    list_of_bads_found = []
    list_of_not_found = []
    with open('datasets/bad_chemicals.csv','r') as csvfile: 
        reader = csv.reader(csvfile, delimiter=',', quotechar='|') 
        list_of_bads = []
        for row in reader:
            list_of_bads.append(row[0])
 
        for ingredient in sorted_ingredients_arr:
            if(ingredient in list_of_bads):
                list_of_bads_found.append(ingredient)
            else:
                list_of_not_found.append(ingredient)
    
    return list_of_bads_found, list_of_not_found


def process(path):
    # load_images('datasets/label_3.png')
    buf, ingredient_bounds_dict, ingredient_obj = detect_text(path)
    # print(ingredient_bounds_dict['ingredients:'])
    bounds_ingredient_dict = switch_key_val(ingredient_bounds_dict)
    # print(bounds_ingredient_dict['140,106'])
    all_ingredients = get_only_ingredients(buf, ingredient_bounds_dict, ingredient_obj)
    # print(all_ingredients)
    first_col = get_col(all_ingredients, ingredient_obj, buf)
    # print(first_col)

    sorted_first_col_dict = sort_col(first_col)

    sorted_ingredients_string = sort_all_ingredients(sorted_first_col_dict, all_ingredients, buf)
    sorted_ingredients_arr = separate_by_comma(sorted_ingredients_string)
    bad_ingredients, rest_ingredients = verify_dataset(sorted_ingredients_arr)
    # print(bad_ingredients)
    # print(rest_ingredients)
    return bad_ingredients, rest_ingredients
