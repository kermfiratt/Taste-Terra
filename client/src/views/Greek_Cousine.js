import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Greek_Cousine({ handleFavorite, favorites }) {
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

      <h1> Greek Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="greek_foods_first">
        <section className="food_container">
          <div>
            <h1> Gyros </h1>
            <div className="box_for_gyros_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Gyros is a popular Greek street food dish consisting of meat cooked on a vertical rotisserie, traditionally </p>
              <p className='sentence'> pork or chicken, though beef and lamb are also used. The meat is seasoned with a blend of herbs and </p>
              <p className='sentence'> spices, then shaved off in thin slices. It's typically served wrapped in a soft, grilled pita with toppings </p>
              <p className='sentence'> such as tomatoes, onions, lettuce, and tzatziki sauce—a creamy yogurt and cucumber blend. Gyros </p>
              <p className='sentence'> offer a flavorful and satisfying meal, beloved for its combination of textures and tastes. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'gyros',
              name: 'Gyros',
              description: 'Gyros is a popular Greek street food dish consisting of meat cooked on a vertical rotisserie...',
              image: '../images/gyros.jpg'
            })}>
              {isFavorite('gyros') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Pastitsio </h1>
            <div className="box_for_pastitsio_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Pastitsio is a beloved Greek casserole dish, often described as a Mediterranean version of lasagna. It </p>
              <p className='sentence'> consists of three key layers: tubular pasta, usually bucatini or penne, seasoned with cinnamon and </p>
              <p className='sentence'> nutmeg; a rich meat sauce made from ground beef or lamb, tomatoes, and onion; and a creamy </p>
              <p className='sentence'> béchamel sauce topping. The layers are assembled and then baked until the top turns golden and </p>
              <p className='sentence'> bubbly. Pastitsio combines a comforting blend of savory flavors and creamy textures, making it a favorite at family gatherings and festive occasions. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'pastitsio',
              name: 'Pastitsio',
              description: 'Pastitsio is a beloved Greek casserole dish, often described as a Mediterranean version of lasagna...',
              image: '../images/pastitsio.jpg'
            })}>
              {isFavorite('pastitsio') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="greek_foods_second">
        <section className="food_container">
          <div>
            <h1> Horta </h1>
            <div className="box_for_horta_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Horta refers to a traditional Greek dish centered around wild or cultivated greens, which are often </p>
              <p className='sentence'> foraged and include varieties like dandelion, chicory, and mustard greens. These greens are typically </p>
              <p className='sentence'> boiled until tender, then served either warm or at room temperature, often dressed with olive oil and </p>
              <p className='sentence'> lemon juice. Horta is valued for its health benefits and is a staple in the Mediterranean diet. It can be </p>
              <p className='sentence'> enjoyed as a simple, nutritious side dish or as a light, standalone meal. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'horta',
              name: 'Horta',
              description: 'Horta refers to a traditional Greek dish centered around wild or cultivated greens...',
              image: '../images/horta.jpg'
            })}>
              {isFavorite('horta') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Yemista </h1>
            <div className="box_for_yemista_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Yemista is a classic Greek dish featuring vegetables, commonly tomatoes, peppers, or zucchini, stuffed </p>
              <p className='sentence'> with a hearty filling. The filling typically includes rice or bulgur, herbs like parsley and mint, and </p>
              <p className='sentence'> sometimes minced meat, all seasoned with olive oil, garlic, and onions. After stuffing, the vegetables are </p>
              <p className='sentence'> baked until tender, allowing the flavors to meld beautifully. Yemista is often topped with a bit of cheese </p>
              <p className='sentence'> and served with a side of yogurt or a light tomato sauce, embodying a delicious blend of Mediterranean flavors. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'yemista',
              name: 'Yemista',
              description: 'Yemista is a classic Greek dish featuring vegetables, commonly tomatoes, peppers, or zucchini, stuffed...',
              image: '../images/yemista.jpg'
            })}>
              {isFavorite('yemista') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="greek_foods_third">
        <section className="food_container">
          <div>
            <h1> Fakes </h1>
            <div className="box_for_fakes_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Fakes is a traditional Greek lentil soup, known for its robust and comforting flavors. This hearty dish is </p>
              <p className='sentence'> made from brown or green lentils, simmered with onions, garlic, and often tomatoes, creating a rich </p>
              <p className='sentence'> broth. Olive oil, bay leaves, and a dash of vinegar or lemon juice are added to enhance the soup's depth </p>
              <p className='sentence'> and zest. Fakes is typically seasoned with a sprinkle of oregano or thyme, and served with a side of </p>
              <p className='sentence'> crusty bread, making it a staple during the cold months in Greece. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'fakes',
              name: 'Fakes',
              description: 'Fakes is a traditional Greek lentil soup, known for its robust and comforting flavors...',
              image: '../images/fakes.jpg'
            })}>
              {isFavorite('fakes') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Avgolemono </h1>
            <div className="box_for_avgolemono_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Avgolemono is a traditional Greek soup that epitomizes the classic combination of lemon and egg. It's </p>
              <p className='sentence'> made by thickening chicken broth with a mixture of beaten eggs and fresh lemon juice, creating a </p>
              <p className='sentence'> creamy and tangy consistency. Rice or orzo pasta is commonly added to the broth, providing a </p>
              <p className='sentence'> satisfying texture. Avgolemono can also be used as a sauce in various Greek dishes, such as dolmades </p>
              <p className='sentence'> or over vegetables. Its velvety texture and vibrant flavor make it a beloved comfort food in Greek cuisine. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'avgolemono',
              name: 'Avgolemono',
              description: 'Avgolemono is a traditional Greek soup that epitomizes the classic combination of lemon and egg...',
              image: '../images/avgolemono.jpg'
            })}>
              {isFavorite('avgolemono') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Greek_Cousine;

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
