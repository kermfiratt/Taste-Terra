import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes when the query changes
  useEffect(() => {
    const fetchRecipes = async () => {
      if (query.trim() !== '') {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/recipes`, {
            params: { query },
          });
          setRecipes(response.data.results);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      } else {
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div>
      <header className="header_style">
        <div className="navigator">
          <div>
            <h5>{props.user ? props.user.email : "Guest"}</h5>
          </div>
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
          <div>
            <NavLink to={'/favorites'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Favorites</NavLink>
          </div>
          <div>
            <NavLink onClick={() => { props.logout(); }} to={'/'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Log Out</NavLink>
          </div>
        </div>
      </header>

      <div className="search-container">
        <h1>Search For Recipes</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
        />
        <div className="recipes">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.id} className="recipe">
                <Link to={`/recipe/${recipe.id}`}>
                  <h2>{recipe.title}</h2>
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
              </div>
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

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
