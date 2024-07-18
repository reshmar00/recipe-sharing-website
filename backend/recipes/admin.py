from django.contrib import admin
from .models import Recipe

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('date_uploaded', 'date_last_modified', 'recipe_name', 'cuisine', 'ingredients', 'instructions', 'uploaded_by')
