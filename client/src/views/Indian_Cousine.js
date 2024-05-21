import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Indian_Cousine({ handleFavorite, favorites }) {
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

      <h1> Indian Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="indian_foods_first">
        <section className="food_container">
          <div>
            <h1> Roti </h1>
            <div className="box_for_roti_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Roti is a type of unleavened flatbread originating from the Indian subcontinent, commonly made from </p>
              <p className='sentence'> whole wheat flour. It is a staple in many households and is typically prepared by kneading dough with </p>
              <p className='sentence'> water, rolling it out into thin circles, and then cooking it on a hot griddle. The bread puffs up on the </p>
              <p className='sentence'> griddle, which indicates it has cooked through, resulting in a soft and pliable texture. Roti is versatile </p>
              <p className='sentence'> and can be served with a variety of dishes, including curries, vegetables, and meats, making it an integral part of daily meals in many cultures. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'roti',
              name: 'Roti',
              description: 'Roti is a type of unleavened flatbread originating from the Indian subcontinent...',
              image: '../images/roti.jpg'
            })}>
              {isFavorite('roti') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Biryani </h1>
            <div className="box_for_biryani_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Biryani is a flavorful South Asian dish combining marinated meat, usually chicken or lamb, with basmati </p>
              <p className='sentence'> rice and a variety of spices. It's cooked using a slow, sealed method called "dum," which infuses deep </p>
              <p className='sentence'> flavors and aromas into the dish. Key spices include saffron, cardamom, and cloves, enhancing its </p>
              <p className='sentence'> distinctiveness. Biryani is commonly garnished with fried onions and nuts, and it's a popular choice for </p>
              <p className='sentence'> festive occasions. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'biryani',
              name: 'Biryani',
              description: 'Biryani is a flavorful South Asian dish combining marinated meat, usually chicken or lamb...',
              image: '../images/biryani.jpg'
            })}>
              {isFavorite('biryani') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="indian_foods_second">
        <section className="food_container">
          <div>
            <h1> Butter Chicken </h1>
            <div className="box_for_butter_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Butter chicken, also known as murgh makhani, is a popular Indian dish consisting of tender chicken </p>
              <p className='sentence'> pieces marinated in spices and yogurt, then cooked in a creamy, buttery tomato-based sauce. The </p>
              <p className='sentence'> sauce is seasoned with various spices like garam masala, cumin, and coriander, which give the dish its </p>
              <p className='sentence'> rich and aromatic flavor. Heavy cream or coconut milk is added to create a smooth and velvety texture </p>
              <p className='sentence'> that complements the spiciness of the sauce. Butter chicken is often served with naan or rice and garnished with fresh cilantro, making it a favorite in Indian cuisine and around the world. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'butter-chicken',
              name: 'Butter Chicken',
              description: 'Butter chicken, also known as murgh makhani, is a popular Indian dish consisting of tender chicken...',
              image: '../images/butter-chicken.jpg'
            })}>
              {isFavorite('butter-chicken') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Korma </h1>
            <div className="box_for_korma_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Korma is a mild curry from the Indian subcontinent, featuring meat such as chicken or lamb in a creamy </p>
              <p className='sentence'> sauce made from yogurt, cream, and spices like coriander and cumin. The sauce often includes ground </p>
              <p className='sentence'> nuts or seeds, enhancing its richness and texture. This dish is characterized by its smooth, delicate </p>
              <p className='sentence'> flavor and is typically garnished with dried fruits or herbs. Korma is popular for its luxurious taste and </p>
              <p className='sentence'> comforting qualities. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'korma',
              name: 'Korma',
              description: 'Korma is a mild curry from the Indian subcontinent, featuring meat such as chicken or lamb in a creamy sauce...',
              image: '../images/korma.jpg'
            })}>
              {isFavorite('korma') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="indian_foods_third">
        <section className="food_container">
          <div>
            <h1> Dal </h1>
            <div className="box_for_dal_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Dal is a fundamental dish in Indian cuisine, made from lentils, peas, or other pulses that are boiled and </p>
              <p className='sentence'> then seasoned with a variety of spices. Common spices include turmeric, cumin, and asafoetida, which </p>
              <p className='sentence'> add depth and warmth to the dish. A critical step in preparing dal is the "tadka" or "tempering," where </p>
              <p className='sentence'> spices are fried in oil or ghee to release their aromatic flavors before being stirred into the cooked </p>
              <p className='sentence'> pulses. This comforting and nutritious dish is often paired with rice or bread like roti, making it a staple in everyday Indian meals. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'dal',
              name: 'Dal',
              description: 'Dal is a fundamental dish in Indian cuisine, made from lentils, peas, or other pulses that are boiled and then seasoned...',
              image: '../images/dal.jpg'
            })}>
              {isFavorite('dal') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Chutney </h1>
            <div className="box_for_chutney_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Chutney is a versatile condiment in Indian cuisine that combines fruits, vegetables, herbs, and spices. It </p>
              <p className='sentence'> can be prepared in various forms, ranging from sweet to savory and mild to fiery hot. Ingredients such </p>
              <p className='sentence'> as mango, tamarind, coconut, tomato, and mint are commonly used, each contributing to the distinct </p>
              <p className='sentence'> flavor profiles of different chutneys. Chutneys are often used as a flavorful accompaniment to enhance </p>
              <p className='sentence'> meals, pairing particularly well with dishes like curries, rice, and breads. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'chutney',
              name: 'Chutney',
              description: 'Chutney is a versatile condiment in Indian cuisine that combines fruits, vegetables, herbs, and spices...',
              image: '../images/chutney.jpg'
            })}>
              {isFavorite('chutney') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Indian_Cousine;

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
