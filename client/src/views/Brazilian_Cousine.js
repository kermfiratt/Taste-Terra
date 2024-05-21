import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Brazilian_Cousine({ handleFavorite, favorites }) {
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

      <h1> Brazilian Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="brazilian_foods_first">
        <section className="food_container">
          <div>
            <h1> Picanha </h1>
            <div className="box_for_picanha_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Picanha is a prized Brazilian cut of beef from the rump cap, recognized for its juicy texture and rich </p>
              <p className='sentence'> flavor. It's typically grilled with a layer of fat intact and seasoned with salt, enhancing its taste. This cut is </p>
              <p className='sentence'> often served in slices directly from the skewer in Brazilian steakhouses, offering a succulent dining </p>
              <p className='sentence'> experience. Due to its popularity, picanha is also becoming a favorite choice in international culinary </p>
              <p className='sentence'> scenes, especially at barbecue events. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'picanha',
              name: 'Picanha',
              description: 'Picanha is a prized Brazilian cut of beef from the rump cap...',
              image: '../images/picanha.jpg'
            })}>
              {isFavorite('picanha') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Moqueca </h1>
            <div className="box_for_moqueca_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Moqueca is a traditional Brazilian seafood stew, celebrated for its vibrant flavor and colorful </p>
              <p className='sentence'> presentation. Originating from the coastal regions, this dish typically features fish, shrimp, or both, </p>
              <p className='sentence'> simmered with diced tomatoes, onions, and bell peppers. The stew is distinctively seasoned with garlic, </p>
              <p className='sentence'> lime juice, and cilantro, creating a fresh and tangy profile. Coconut milk and palm oil are added for a rich, </p>
              <p className='sentence'> creamy texture and a touch of tropical sweetness. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'moqueca',
              name: 'Moqueca',
              description: 'Moqueca is a traditional Brazilian seafood stew...',
              image: '../images/moqueca.jpg'
            })}>
              {isFavorite('moqueca') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="brazilian_foods_second">
        <section className="food_container">
          <div>
            <h1> Farofa </h1>
            <div className="box_for_farofa_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Farofa is a quintessential Brazilian side dish made primarily from cassava flour, known as "farinha" in </p>
              <p className='sentence'> Portuguese. This toasted flour is cooked with butter, onions, and various seasonings until it develops a </p>
              <p className='sentence'> golden, crunchy texture. It often includes mix-ins like diced bacon, sausage, eggs, or vegetables, </p>
              <p className='sentence'> enhancing its flavor and nutritional value. Farofa is beloved for its versatility and is typically served </p>
              <p className='sentence'> alongside grilled meats, stews, or beans, adding a delightful crunch and absorbing the flavors of accompanying dishes. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'farofa',
              name: 'Farofa',
              description: 'Farofa is a quintessential Brazilian side dish made primarily from cassava flour...',
              image: '../images/farofa.jpg'
            })}>
              {isFavorite('farofa') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Coxinha </h1>
            <div className="box_for_coxinha_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Coxinha is a beloved Brazilian snack that resembles a teardrop, featuring a crispy, breaded exterior and </p>
              <p className='sentence'> a savory filling. Traditionally, the filling consists of shredded chicken mixed with onions, parsley, and </p>
              <p className='sentence'> cream cheese, although variations may include different meats or vegetarian options. The dough is </p>
              <p className='sentence'> made from wheat flour and chicken broth, which is then shaped around the filling, breaded, and deep- </p>
              <p className='sentence'> fried until golden. Coxinhas are commonly served at parties and gatherings, offering a delicious and satisfying bite-sized treat. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'coxinha',
              name: 'Coxinha',
              description: 'Coxinha is a beloved Brazilian snack that resembles a teardrop...',
              image: '../images/coxinha.jpg'
            })}>
              {isFavorite('coxinha') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="brazilian_foods_third">
        <section className="food_container">
          <div>
            <h1> Rabanada </h1>
            <div className="box_for_rabanada_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Rabanada is a traditional Brazilian dessert similar to French toast, commonly enjoyed during Christmas </p>
              <p className='sentence'> celebrations. It starts with thick slices of day-old bread, which are soaked in a mixture of milk and eggs, </p>
              <p className='sentence'> then pan-fried until golden. After frying, the slices are typically coated in a mixture of cinnamon and </p>
              <p className='sentence'> sugar, adding a sweet and aromatic finish. Some variations also include a drizzle of honey or condensed </p>
              <p className='sentence'> milk for extra richness. Rabanada offers a delightful blend of textures and flavors, making it a festive favorite. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'rabanada',
              name: 'Rabanada',
              description: 'Rabanada is a traditional Brazilian dessert similar to French toast...',
              image: '../images/rabanada.jpg'
            })}>
              {isFavorite('rabanada') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Fraldinha </h1>
            <div className="box_for_fraldinha_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Fraldinha, known as flank steak in English, is a popular cut of beef in Brazilian cuisine, prized for its rich </p>
              <p className='sentence'> flavor and tender texture. It comes from the lower abdominal area of the cow, offering a long, flat piece </p>
              <p className='sentence'> of meat that's perfect for grilling. Fraldinha is marinated or simply seasoned with salt and pepper, then </p>
              <p className='sentence'> cooked over high heat to achieve a juicy, succulent finish. It's often served in thin slices, making it a </p>
              <p className='sentence'> favorite at Brazilian barbecues and steakhouses. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'fraldinha',
              name: 'Fraldinha',
              description: 'Fraldinha, known as flank steak in English, is a popular cut of beef in Brazilian cuisine...',
              image: '../images/fraldinha.jpg'
            })}>
              {isFavorite('fraldinha') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Brazilian_Cousine;

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
