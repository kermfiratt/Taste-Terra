import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Mexican_Cousine({ handleFavorite, favorites }) {
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

      <h1> Mexican Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="mexican_foods_first">
        <section className="food_container">
          <div>
            <h1> Tacos </h1>
            <div className="box_for_taco_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Tacos, originating from Mexico, are a cherished culinary delight worldwide. They feature a folded or </p>
              <p className='sentence'> rolled tortilla filled with a variety of ingredients, including meat, vegetables, cheese, and sauces. This </p>
              <p className='sentence'> versatile dish offers a symphony of flavors and textures, from the crispy shell to the tender meat and </p>
              <p className='sentence'> vibrant toppings. Tacos can be customized to suit individual preferences, making them suitable for </p>
              <p className='sentence'> meat lovers, vegetarians, and vegans alike. Whether enjoyed as street food or in upscale restaurants, </p>
              <p className='sentence'> tacos consistently deliver a satisfying and memorable dining experience. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'tacos',
              name: 'Tacos',
              description: 'Tacos, originating from Mexico, are a cherished culinary delight...',
              image: '../images/tacos.jpg'
            })}>
              {isFavorite('tacos') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Nachos </h1>
            <div className="box_for_nacho_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Nachos, a Tex-Mex creation, are a delectable snack enjoyed globally. They consist of crispy tortilla chips </p>
              <p className='sentence'> generously topped with melted cheese and a variety of savory toppings. Common additions include </p>
              <p className='sentence'> seasoned ground beef, beans, jalapeños, sour cream, and guacamole. Nachos offer a delightful blend of </p>
              <p className='sentence'> flavors and textures, perfect for sharing or indulging solo. Whether enjoyed as a casual snack or a party </p>
              <p className='sentence'> favorite, nachos never fail to satisfy cravings for cheesy, crunchy goodness. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'nachos',
              name: 'Nachos',
              description: 'Nachos, a Tex-Mex creation, are a delectable snack enjoyed globally...',
              image: '../images/nachos.jpg'
            })}>
              {isFavorite('nachos') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="mexican_foods_second">
        <section className="food_container">
          <div>
            <h1> Burrito </h1>
            <div className="box_for_burrito_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A burrito is a popular Mexican dish consisting of a large flour tortilla wrapped around various fillings. </p>
              <p className='sentence'> Common fillings include rice, beans, meat (such as beef, chicken, or pork), cheese, salsa, and </p>
              <p className='sentence'> vegetables. The burrito is typically folded at both ends to enclose the fillings, creating a convenient </p>
              <p className='sentence'> handheld meal. It offers a satisfying combination of flavors and textures, from the tender meat to the </p>
              <p className='sentence'> creamy beans and flavorful salsa. Burritos are enjoyed worldwide for their versatility and portability, </p>
              <p className='sentence'> making them a beloved choice for quick lunches or hearty dinners. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'burrito',
              name: 'Burrito',
              description: 'A burrito is a popular Mexican dish consisting of a large flour tortilla wrapped around various fillings...',
              image: '../images/burrito.jpg'
            })}>
              {isFavorite('burrito') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Guacamole </h1>
            <div className="box_for_guacamole_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Guacamole, a Mexican dip, is crafted from mashed avocados mixed with lime juice and spices. </p>
              <p className='sentence'> Ingredients like onions, tomatoes, and cilantro are often added for extra flavor and texture. Its versatility </p>
              <p className='sentence'> extends to being a perfect accompaniment for tacos, burritos, and salads, enhancing their taste with its </p>
              <p className='sentence'> creamy goodness. Appreciated worldwide for its simplicity and deliciousness, guacamole stands as a </p>
              <p className='sentence'> beloved culinary delight. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'guacamole',
              name: 'Guacamole',
              description: 'Guacamole, a Mexican dip, is crafted from mashed avocados mixed with lime juice and spices...',
              image: '../images/guacamole.jpg'
            })}>
              {isFavorite('guacamole') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="mexican_foods_third">
        <section className="food_container">
          <div>
            <h1> Tamal </h1>
            <div className="box_for_tamal_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A tamal is a traditional Mesoamerican dish made of masa, a dough typically crafted from cornmeal, </p>
              <p className='sentence'> filled with various ingredients, and wrapped in a corn husk or banana leaf. Common fillings include </p>
              <p className='sentence'> meats, cheese, vegetables, or chilies, often seasoned with savory spices. The tamal is then steamed </p>
              <p className='sentence'> until cooked, resulting in a moist and flavorful treat. This dish holds cultural significance in many Latin </p>
              <p className='sentence'> American countries and is often enjoyed during festivals and special occasions. Its combination of tender masa </p>
              <p className='sentence'> and flavorful fillings makes it a beloved staple in Latin American cuisine. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'tamal',
              name: 'Tamal',
              description: 'A tamal is a traditional Mesoamerican dish made of masa...',
              image: '../images/tamal.jpg'
            })}>
              {isFavorite('tamal') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Quesadilla </h1>
            <div className="box_for_quesadilla_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A quesadilla is a Mexican dish made by folding a tortilla around a filling, typically cheese, and then </p>
              <p className='sentence'> grilling or frying until crispy. While cheese is the most common filling, other ingredients such as meats, </p>
              <p className='sentence'> beans, or vegetables can also be added. The dish is versatile, allowing for endless variations to suit </p>
              <p className='sentence'> different tastes and preferences. Quesadillas are often served as a quick snack, appetizer, or main </p>
              <p className='sentence'> course and are enjoyed for their gooey, melted cheese and crispy exterior. They're a popular choice in </p>
              <p className='sentence'> Mexican cuisine and have gained popularity worldwide for their delicious simplicity. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'quesadilla',
              name: 'Quesadilla',
              description: 'A quesadilla is a Mexican dish made by folding a tortilla around a filling, typically cheese...',
              image: '../images/quesadilla.jpg'
            })}>
              {isFavorite('quesadilla') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Mexican_Cousine;

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
