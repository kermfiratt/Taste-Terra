import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";



function Turkish_Cousine({ handleFavorite, favorites }) {
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

      <h1> Turkish Cousine </h1>

      <h3> Our Suggestions </h3>

      <div className="turkish_foods_first">
        <section className="food_container">
          <div>
            <h1> Pide </h1>
            <div className="box_for_pide_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Pide is a popular Turkish flatbread, often referred to as Turkish pizza. It's made with a soft dough that's </p>
              <p className='sentence'> shaped into an oval or boat-like form before baking. Toppings vary widely but typically include minced </p>
              <p className='sentence'> meat, cheese, eggs, and vegetables such as spinach or peppers. Before baking, the edges are folded to </p>
              <p className='sentence'> hold the toppings. Pide is baked in a high-temperature oven until the crust is golden and crispy. It's </p>
              <p className='sentence'> commonly enjoyed during Ramadan and as a staple in Turkish eateries. </p>
            </div>

            <button onClick={() => handleFavorite({
              id: 'pide',
              name: 'Pide',
              description: 'Pide is a popular Turkish flatbread...',
              image: '/images/pide.jpg'
            })}>
              {isFavorite('pide') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>


           



          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Çiğköfte </h1>
            <div className="box_for_cigkofte_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Çiğ köfte is a traditional Turkish dish made from raw ground meat (traditionally lamb or beef), fine </p>
              <p className='sentence'> bulgur, and a mixture of spices including red pepper, cumin, and mint. Modern versions often use a </p>
              <p className='sentence'> meatless recipe for health and safety reasons, substituting the meat with more bulgur or walnuts. The </p>
              <p className='sentence'> ingredients are kneaded together until they form a smooth, dough-like consistency. Çiğ köfte is </p>
              <p className='sentence'> typically served as an appetizer, shaped into small balls or patties, and wrapped in lettuce or flatbread. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'cigkofte',
              name: 'Çiğköfte',
              description: 'Çiğ köfte is a traditional Turkish dish made from raw ground meat...',
              image: '../images/cigkofte.jpg'
            })}>
              {isFavorite('cigkofte') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="turkish_foods_second">
        <section className="food_container">
          <div>
            <h1> Sarma </h1>
            <div className="box_for_sarma_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Sarma refers to a dish common in Turkish and Balkan cuisines involving grape or cabbage leaves rolled </p>
              <p className='sentence'> around a filling typically made from minced meat, rice, onions, and various spices. Vegetarian versions </p>
              <p className='sentence'> may substitute meat with bulgur or additional vegetables. The rolls are tightly wrapped and cooked in a </p>
              <p className='sentence'> flavorful broth, often enhanced with lemon, tomato sauce, or olive oil. Sarma is traditionally served as an </p>
              <p className='sentence'> appetizer or a main dish and is particularly popular during festive occasions. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'sarma',
              name: 'Sarma',
              description: 'Sarma refers to a dish common in Turkish and Balkan cuisines...',
              image: '../images/sarma.jpg'
            })}>
              {isFavorite('sarma') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Iskender </h1>
            <div className="box_for_iskender_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> İskender Kebap is a renowned Turkish dish named after its inventor, İskender Efendi, from Bursa. It </p>
              <p className='sentence'> consists of thinly sliced grilled lamb basted with tomato sauce and served over pita bread, which </p>
              <p className='sentence'> absorbs the meat's juices and the sauce. A generous drizzle of melted sheep butter and yogurt </p>
              <p className='sentence'> complements the dish. İskender Kebap is distinguished by its rich layers of flavor and texture, making it </p>
              <p className='sentence'> a beloved choice in Turkish cuisine, often enjoyed with a side of grilled vegetables. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'iskender',
              name: 'Iskender',
              description: 'İskender Kebap is a renowned Turkish dish named after its inventor...',
              image: '../images/iskender.jpg'
            })}>
              {isFavorite('iskender') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="turkish_foods_third">
        <section className="food_container">
          <div>
            <h1> Mantı </h1>
            <div className="box_for_manti_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Mantı is a traditional Turkish dish consisting of small dumplings made from a simple dough of flour, </p>
              <p className='sentence'> egg, and salt. These dumplings are filled with a seasoned mixture of ground meat—commonly beef or </p>
              <p className='sentence'> lamb—onions, and spices. After being boiled or steamed, mantı is typically served topped with a </p>
              <p className='sentence'> combination of garlic yogurt, melted butter, and spices such as red pepper, dried mint, and sometimes sumac. </p>
              <p className='sentence'> Some variations may include a tomato-based sauce as well. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'manti',
              name: 'Mantı',
              description: 'Mantı is a traditional Turkish dish consisting of small dumplings...',
              image: '../images/manti.jpg'
            })}>
              {isFavorite('manti') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Börek </h1>
            <div className="box_for_borek_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Börek is a savory Turkish pastry made from layers of thin dough known as yufka or phyllo. It is filled with </p>
              <p className='sentence'> various ingredients like cheese, minced meat, spinach, or potatoes. The pastry is either layered or </p>
              <p className='sentence'> rolled, and can be baked or fried, resulting in a crispy exterior and a soft filling. Commonly eaten as a </p>
              <p className='sentence'> snack or part of breakfast, börek is a staple in Turkish cuisine and popular throughout the regions </p>
              <p className='sentence'> influenced by the former Ottoman Empire. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'borek',
              name: 'Börek',
              description: 'Börek is a savory Turkish pastry made from layers of thin dough...',
              image: '../images/borek.jpg'
            })}>
              {isFavorite('borek') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Turkish_Cousine;

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
