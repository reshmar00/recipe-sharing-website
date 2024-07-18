from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from .models import Recipe
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    return JsonResponse({'message': 'Welcome to our Recipe Sharing Website!'})

def get_recipes(request):
    recipes = Recipe.objects.all().values()  # Query all recipes from the database
    return JsonResponse(list(recipes), safe=False)

@csrf_exempt
@require_POST
def add_recipe(request):
    data = json.loads(request.body)
    recipe_name = data.get('recipe_name')
    cuisine = data.get('cuisine')
    ingredients = data.get('ingredients')
    instructions = data.get('instructions')

    if not (recipe_name and cuisine and ingredients and instructions):
        return JsonResponse({'error': 'Please provide all required fields: Recipe Name, Cuisine, Ingredients, Instructions)'}, status=400)

    new_recipe = Recipe(
        recipe_name=recipe_name,
        cuisine=cuisine,
        ingredients=ingredients,
        instructions=instructions,
    )
    new_recipe.save()

    return JsonResponse({
        'message': 'Recipe added successfully!',
        'recipe': {
            'recipe_name': new_recipe.recipe_name,
            'cuisine': new_recipe.cuisine,
            'ingredients': new_recipe.ingredients,
            'instructions': new_recipe.instructions,
        }
    })