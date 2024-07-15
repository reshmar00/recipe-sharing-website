// Recipes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Our Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.recipe_name}</h3>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
          <p><strong>Uploaded By:</strong> {recipe.uploaded_by}</p>
          <p><strong>Last Modified:</strong> {recipe.date_last_modified}</p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;