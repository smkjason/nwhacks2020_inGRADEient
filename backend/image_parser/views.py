from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import base64

# Create your views here.

@csrf_exempt
def index(request):
	print(request.method)
	print(request.POST.get('image'))
	print("I'm called!!! :)")
	image_data = base64.b64decode(request.POST.get('image'))
	filename='image_data.jpg'
	with open(filename, 'wb') as f:
		f.write(image_data)
	return HttpResponse("Hello, world! I'm going to parse the image soon!")

# def parse(request):