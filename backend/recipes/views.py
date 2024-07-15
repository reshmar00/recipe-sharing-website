from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Recipe
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to our Recipe Sharing Website!")

def get_recipes(request):
    recipes = Recipe.objects.all().values()  # Query all recipes from the database
    return JsonResponse(list(recipes), safe=False)