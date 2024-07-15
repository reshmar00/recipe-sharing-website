from django.contrib import admin
from django.urls import path
from recipes import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('api/recipes/', views.get_recipes, name='get_recipes'),
    path('api/add/', views.add_recipe, name='add_recipe'),
]