import React from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Favorites = ({ favorites, props }) => {


  const navigate = useNavigate();

  return (
    <div>


     <header className="header_style">
      
        <div className="navigator">
          <div>
            <NavLink to={'/secret-page'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}> Cousine's </NavLink>
          </div>


          <div>
          <NavLink onClick={() => {props.logout();}} to={'/'}style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}> Log Out </NavLink>
          </div>
        </div>

      </header>






      <h2>Your Favorites</h2>
      <div className="favorites_container">
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((meal) => (
            <div key={meal.id} className="favorite-meal">
              <h3>{meal.name}</h3>
              <img src={meal.image} alt={meal.name} />
              <p>{meal.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;





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
