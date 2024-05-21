import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Chinese_Cousine({ handleFavorite, favorites }) {
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

      <h1> Chinese Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="chinese_foods_first">
        <section className="food_container">
          <div>
            <h1> Baozi </h1>
            <div className="box_for_baozi_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Baozi, or bao, are traditional Chinese steamed buns, a staple in both daily meals and festive gatherings. </p>
              <p className='sentence'> These fluffy buns are made from a yeast-leavened dough, giving them a soft, airy texture. They are </p>
              <p className='sentence'> typically filled with a variety of ingredients, including seasoned pork, vegetables, or sweet bean pastes. </p>
              <p className='sentence'> The buns are steamed in bamboo baskets, which imparts a subtle, earthy aroma. Baozi are enjoyed </p>
              <p className='sentence'> across China and have gained popularity worldwide for their delicious versatility and convenience. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'baozi',
              name: 'Baozi',
              description: 'Baozi, or bao, are traditional Chinese steamed buns...',
              image: '../images/baozi.jpg'
            })}>
              {isFavorite('baozi') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Jiaozi </h1>
            <div className="box_for_jiaozi_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Jiaozi are traditional Chinese dumplings enjoyed particularly during the Lunar New Year and other </p>
              <p className='sentence'> festive occasions. They consist of thin dough wrappers filled with a mixture of ingredients like pork, </p>
              <p className='sentence'> cabbage, and chives. The edges of the dough are pleated to enclose the filling securely. Jiaozi can be </p>
              <p className='sentence'> boiled, steamed, or pan-fried, making them versatile in texture and preparation. These dumplings are </p>
              <p className='sentence'> commonly served with a soy sauce, vinegar, and chili oil dipping sauce, enhancing their flavor. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'jiaozi',
              name: 'Jiaozi',
              description: 'Jiaozi are traditional Chinese dumplings enjoyed...',
              image: '../images/jiaozi.jpg'
            })}>
              {isFavorite('jiaozi') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="chinese_foods_second">
        <section className="food_container">
          <div>
            <h1> Shabu-shabu </h1>
            <div className="box_for_schabu_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Shabu-shabu is a popular Japanese hotpot dish featuring thinly sliced meat and vegetables. Ingredients </p>
              <p className='sentence'> are swished in a pot of boiling broth, a method mimicking the "swish-swish" sound from which the dish </p>
              <p className='sentence'> gets its name. Diners cook their own servings at the table, dipping them into flavorful sauces like ponzu </p>
              <p className='sentence'> or sesame. This communal style of eating makes shabu-shabu a favorite for social gatherings. Typically, </p>
              <p className='sentence'> the meal ends with the remaining broth served with noodles or rice.</p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'shabu-shabu',
              name: 'Shabu-shabu',
              description: 'Shabu-shabu is a popular Japanese hotpot dish...',
              image: '../images/shabu.jpg'
            })}>
              {isFavorite('shabu-shabu') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Sweet and Sour Sauce </h1>
            <div className="box_for_sweet_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Sweet and sour sauce is a classic Chinese condiment known for its vibrant flavor profile that balances </p>
              <p className='sentence'> sweetness with tanginess. This sauce typically combines sugar, vinegar, and a fruit component like </p>
              <p className='sentence'> pineapple juice or orange juice to achieve its distinctive taste. It often includes ingredients such as </p>
              <p className='sentence'> ketchup or soy sauce, which add depth and color. Sweet and sour sauce is commonly used in dishes like </p>
              <p className='sentence'> sweet and sour chicken, pork, or shrimp. Its glossy, red appearance makes it visually appealing as well. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'sweet-and-sour-sauce',
              name: 'Sweet and Sour Sauce',
              description: 'Sweet and sour sauce is a classic Chinese condiment...',
              image: '../images/sweet-and-sour-sauce.jpg'
            })}>
              {isFavorite('sweet-and-sour-sauce') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="chinese_foods_third">
        <section className="food_container">
          <div>
            <h1> Hot Pot </h1>
            <div className="box_for_hot_pot_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Hot pot is a communal Chinese cooking method where diners cook a variety of ingredients in a shared </p>
              <p className='sentence'> pot of simmering broth. The pot is typically placed at the center of the table, allowing everyone to </p>
              <p className='sentence'> participate in the cooking process. Ingredients can include thinly sliced meats, seafood, vegetables, </p>
              <p className='sentence'> tofu, and noodles. Each diner selects their items, cooks them in the broth, and dips them in sauces. Hot </p>
              <p className='sentence'> pot is not only a meal but a social experience, fostering conversation and togetherness. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'hot-pot',
              name: 'Hot Pot',
              description: 'Hot pot is a communal Chinese cooking method...',
              image: '../images/hot-pot.jpg'
            })}>
              {isFavorite('hot-pot') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Pào cài </h1>
            <div className="box_for_pao_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Pào cài is a classic Chinese dish featuring pickled vegetables, often cabbage or mustard greens, </p>
              <p className='sentence'> fermented with a medley of spices. This fermentation process gives rise to its distinctive tangy and </p>
              <p className='sentence'> slightly spicy flavor profile. Typically served as a condiment or side dish, Pào cài adds depth and </p>
              <p className='sentence'> complexity to meals. Its popularity transcends borders, with enthusiasts enjoying it as a versatile </p>
              <p className='sentence'> accompaniment to various cuisines. Whether as a crunchy topping or a flavorful side, Pào cài enriches culinary experiences with its unique taste. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'pao-cai',
              name: 'Pào cài',
              description: 'Pào cài is a classic Chinese dish featuring pickled vegetables...',
              image: '../images/pao-cai.jpg'
            })}>
              {isFavorite('pao-cai') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Chinese_Cousine;

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
