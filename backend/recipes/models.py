from django.db import models

class Recipe(models.Model):
    recipe_name = models.CharField(max_length=250)
    cuisine = models.CharField(max_length=250, blank=True, null=True)
    ingredients = models.TextField(blank=True, null=True)
    instructions = models.TextField(blank=True, null=True)
    date_uploaded = models.DateTimeField(auto_now_add=True)
    date_last_modified = models.DateTimeField(auto_now=True)
    uploaded_by = models.CharField(max_length=250, default='guest')

    def __str__(self):
        return self.recipe_name