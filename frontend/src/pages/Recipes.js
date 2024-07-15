// Recipes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipes.css';  // Import the CSS file

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/')
      .then(response => {
        setRecipes(response.data);  // response.data is the array of recipes
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div className="recipes-container">
      <h2>Our Recipes</h2>
      <table className="recipes-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Uploaded By</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <tr key={recipe.id}>
              <td>{recipe.recipe_name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.instructions}</td>
              <td>{recipe.uploaded_by}</td>
              <td>{recipe.date_last_modified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recipes; 