from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import base64

from . import image_processor
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
	output = process(filename)
	return JsonResponse(output)

# def parse(request):