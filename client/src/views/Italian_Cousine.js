import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Italian_Cousine({ handleFavorite, favorites }) {
  const navigate = useNavigate();

  // Helper function to check if a meal is in the favorites list
  const isFavorite = (mealId) => favorites.some(fav => fav.id === mealId);

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
            <NavLink to={'/search'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}> Search </NavLink>
          </div>

          <div>
            <NavLink to={'/favorites'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}> Favorites </NavLink>
          </div>
        </div>
      </header>

      <h1> Italian Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="italian_foods_first">
        <section className="food_container">
          <div>
            <h1> Risotto </h1>
            <div className="box_for_risotto_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Risotto is a classic Italian dish known for its creamy texture. It's primarily made from Arborio rice, which </p>
              <p className='sentence'> is cooked slowly with broth until it becomes rich and velvety. Common ingredients include onions, </p>
              <p className='sentence'> garlic, and Parmesan cheese, with broth added gradually during cooking. Variations might feature </p>
              <p className='sentence'> mushrooms, seafood, or vegetables, enhancing the dish's flavor and richness. This hearty meal is often </p>
              <p className='sentence'> served as a first course in Italy but can also be a satisfying main dish. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'risotto',
              name: 'Risotto',
              description: 'Risotto is a classic Italian dish known for its creamy texture...',
              image: '../images/risotto.jpg'
            })}>
              {isFavorite('risotto') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Gnocchi </h1>
            <div className="box_for_gnocchi_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Gnocchi are soft, pillowy dumplings, a staple in Italian cuisine with roots tracing back to Roman times. </p>
              <p className='sentence'> Traditionally made from potatoes, flour, and eggs, these dumplings are rolled into small, thumb-sized </p>
              <p className='sentence'> pieces and often indented with a fork to hold sauce better. They are boiled until they float to the surface, </p>
              <p className='sentence'> indicating they're cooked through. Gnocchi can be served with a variety of sauces, such as sage butter, </p>
              <p className='sentence'> marinara, or pesto, making them versatile and comforting. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'gnocchi',
              name: 'Gnocchi',
              description: 'Gnocchi are soft, pillowy dumplings, a staple in Italian cuisine...',
              image: '../images/gnocchi.jpg'
            })}>
              {isFavorite('gnocchi') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="italian_foods_second">
        <section className="food_container">
          <div>
            <h1> Bruschetta </h1>
            <div className="box_for_bruschetta_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Bruschetta is a beloved Italian appetizer that starts with slices of toasted bread. These slices are </p>
              <p className='sentence'> typically rubbed with garlic and topped with olive oil for rich flavor. The classic topping includes fresh </p>
              <p className='sentence'> tomatoes, basil, and mozzarella, though variations are common. This dish contrasts the crunch of the </p>
              <p className='sentence'> bread with the softness of the toppings. Bruschetta is versatile and can be adapted with different </p>
              <p className='sentence'> toppings like vegetables, cheeses, and meats, making it a perfect start to any meal. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'bruschetta',
              name: 'Bruschetta',
              description: 'Bruschetta is a beloved Italian appetizer that starts with slices of toasted bread...',
              image: '../images/bruschetta.jpg'
            })}>
              {isFavorite('bruschetta') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Pizza Margherita </h1>
            <div className="box_for_pizza_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Pizza Margherita is a classic Italian pizza known for its simplicity and fresh ingredients. It consists of a </p>
              <p className='sentence'> thin crust, topped with San Marzano tomato sauce, fresh mozzarella cheese, and basil leaves. The </p>
              <p className='sentence'> colors of the toppings represent the Italian flag: red, white, and green. Traditionally baked in a wood- </p>
              <p className='sentence'> fired oven, it features a slightly charred and bubbly crust with a smoky flavor. Originating from Naples, </p>
              <p className='sentence'> this dish honors Queen Margherita of Savoy, symbolizing a cherished staple of Italian cuisine. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'pizza',
              name: 'Pizza Margherita',
              description: 'Pizza Margherita is a classic Italian pizza known for its simplicity and fresh ingredients...',
              image: '../images/pizza.jpg'
            })}>
              {isFavorite('pizza') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="italian_foods_third">
        <section className="food_container">
          <div>
            <h1> Nougat </h1>
            <div className="box_for_nougat_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Nougat is a sweet confectionery that originates from the Mediterranean. It's primarily made from sugar, </p>
              <p className='sentence'> honey, and egg whites, which are whipped together to create a light, airy texture. Roasted nuts like </p>
              <p className='sentence'> almonds, pistachios, or hazelnuts are typically embedded within, adding a crunchy contrast. There are </p>
              <p className='sentence'> various types of nougat, including the soft Italian Torrone and the firmer French Nougat de Montélimar. </p>
              <p className='sentence'> This treat is especially popular during festive occasions and is enjoyed in many cultures around the world. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'nougat',
              name: 'Nougat',
              description: 'Nougat is a sweet confectionery that originates from the Mediterranean...',
              image: '../images/nougat.jpg'
            })}>
              {isFavorite('nougat') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Marinara </h1>
            <div className="box_for_marinara_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Marinara sauce is a staple in Italian cuisine, known for its bright, fresh flavors. It is made with tomatoes, </p>
              <p className='sentence'> garlic, onions, and herbs, typically simmered until thickened. The sauce's simplicity allows the natural </p>
              <p className='sentence'> sweetness of the tomatoes to shine, enhanced by the aromatic blend of basil and oregano. Unlike meat </p>
              <p className='sentence'> sauces, marinara is quick to prepare, often used as a base for pasta, pizza, and seafood dishes. This </p>
              <p className='sentence'> versatile sauce is celebrated for its ease of preparation and vibrant taste. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'marinara',
              name: 'Marinara',
              description: 'Marinara sauce is a staple in Italian cuisine, known for its bright, fresh flavors...',
              image: '../images/marinara.jpg'
            })}>
              {isFavorite('marinara') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Italian_Cousine;

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
