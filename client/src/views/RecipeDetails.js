import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';



const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!id) return;

      const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
      console.log("API Key:", apiKey);
      console.log("Recipe ID:", id);

      if (!apiKey) {
        setError('API key is missing. Please check your .env file.');
        return;
      }

      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: {
            apiKey: apiKey,
          },
        });
        console.log('Recipe Details:', response.data);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError('Could not fetch recipe details. Please try again later.');
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">



<div>
<header className="header_style">
        <div className="navigator">
         
          <div>
            <NavLink to={'/secret-page'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Cousine's</NavLink>
          </div>
          <div>
            <NavLink to={'/search'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Search</NavLink>
          </div>
          
        </div>
      </header>

    </div>









      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <div className="instructions" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </div>
  );
};

export default RecipeDetails;


const linkStyles = {
  activeLink: {
    color: "white",
    textDecoration: 'none'
  },
  defaultLink: {
    textDecoration: "none",
    color: "white",
  },
};
