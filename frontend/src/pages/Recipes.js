// Recipes.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
      });
  }, []);

  return (
    <div className="recipes-container">
      <h2>Our Recipes</h2>
      <p>Explore our mouth-watering recipes.</p>
      <table className="recipes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date Uploaded</th>
            <th>Date Last Modified</th>
            <th>Recipe Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Uploaded By</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.date_uploaded}</td>
              <td>{recipe.date_last_modified}</td>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>{recipe.uploaded_by}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recipes;