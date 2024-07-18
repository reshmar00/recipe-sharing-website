from django.contrib import admin
from django.urls import path
from django.urls import include
from recipes import views

######## For backend #########

#urlpatterns = [
#    path('admin/', admin.site.urls),
#    path('', include('recipes.urls')),
#]

######## For frontend ##########

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('api/recipes/', views.get_recipes, name='get_recipes'),
    path('api/add/', views.add_recipe, name='add_recipe'),
]
