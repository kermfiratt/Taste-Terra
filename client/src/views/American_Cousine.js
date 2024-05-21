import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function American_Cousine({ handleFavorite, favorites }) {
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

      <h1> American Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="american_foods_first">
        <section className="food_container">
          <div>
            <h1> Mac and Cheese </h1>
            <div className="box_for_mac_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Mac and cheese is a beloved comfort food featuring macaroni pasta coated in a creamy cheese sauce. </p>
              <p className='sentence'> The sauce is typically made with melted cheese, milk or cream, and seasonings for extra flavor. </p>
              <p className='sentence'> Variations may include additions like breadcrumbs, bacon, or vegetables for texture and taste. Often </p>
              <p className='sentence'> baked until golden and bubbly, it offers a satisfyingly cheesy indulgence. Renowned for its creamy </p>
              <p className='sentence'> richness and nostalgic charm, mac and cheese is a perennial favorite for all ages. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'mac-and-cheese',
              name: 'Mac and Cheese',
              description: 'Mac and cheese is a beloved comfort food...',
              image: '../images/mac-and-cheese.jpg'
            })}>
              {isFavorite('mac-and-cheese') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Doughnut </h1>
            <div className="box_for_doughnot_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A doughnut, or donut, is a sweet fried pastry typically shaped as a ring or filled with various fillings. The </p>
              <p className='sentence'> dough is made from flour, sugar, yeast, and often eggs and milk, resulting in a light and fluffy texture. </p>
              <p className='sentence'> Once fried, doughnuts are often coated with glazes, powdered sugar, or cinnamon for added sweetness </p>
              <p className='sentence'> and flavor. They are enjoyed as a popular treat for breakfast or dessert, often paired with coffee or tea. </p>
              <p className='sentence'> Doughnuts come in a wide variety of flavors and styles, making them a beloved snack around the world. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'doughnut',
              name: 'Doughnut',
              description: 'A doughnut, or donut, is a sweet fried pastry...',
              image: '../images/doughnut.jpg'
            })}>
              {isFavorite('doughnut') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="american_foods_second">
        <section className="food_container">
          <div>
            <h1> Pulled Pork </h1>
            <div className="box_for_pork_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Pulled pork is a flavorful dish made from slow-cooked, tender pork shoulder or pork butt. The meat is </p>
              <p className='sentence'> seasoned with a blend of spices and cooked low and slow until it's easily shredded with a fork. Typically, </p>
              <p className='sentence'> it's cooked in a barbecue sauce or dry rub, infusing it with smoky, savory flavors. Pulled pork is often </p>
              <p className='sentence'> served on sandwiches or as a main dish alongside sides like coleslaw or baked beans. Its juicy, melt-in- </p>
              <p className='sentence'> your-mouth texture and rich flavor make it a favorite at barbecues and gatherings. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'pulled-pork',
              name: 'Pulled Pork',
              description: 'Pulled pork is a flavorful dish made from slow-cooked, tender pork shoulder...',
              image: '../images/pulled-pork.jpg'
            })}>
              {isFavorite('pulled-pork') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Brownies </h1>
            <div className="box_for_brownie_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A brownie is a decadent dessert typically made from chocolate, butter, sugar, eggs, and flour. The batter </p>
              <p className='sentence'> is mixed until smooth and then baked in a rectangular pan until the edges are crispy and the center is </p>
              <p className='sentence'> fudgy. Brownies come in various forms, from dense and chewy to cake-like and light, depending on the </p>
              <p className='sentence'> recipe and ingredients used. They are often enjoyed warm with a scoop of ice cream or a drizzle of </p>
              <p className='sentence'> chocolate sauce for added indulgence. Brownies are a beloved treat for chocolate lovers, offering a perfect balance of sweetness and richness in every bite. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'brownies',
              name: 'Brownies',
              description: 'A brownie is a decadent dessert typically made from chocolate...',
              image: '../images/brownies.jpg'
            })}>
              {isFavorite('brownies') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="american_foods_third">
        <section className="food_container">
          <div>
            <h1> Fried Chicken </h1>
            <div className="box_for_chicken_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Fried chicken is a popular dish made by coating chicken pieces in seasoned flour or batter and deep- </p>
              <p className='sentence'> frying them to achieve a crispy exterior and juicy interior. The seasoning often includes a mix of spices </p>
              <p className='sentence'> like salt, pepper, garlic powder, and paprika. This dish is a cornerstone of Southern U.S. cuisine and has </p>
              <p className='sentence'> been adapted by cultures around the world with unique variations. Fried chicken is typically served with </p>
              <p className='sentence'> sides like mashed potatoes, coleslaw, and biscuits. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'fried-chicken',
              name: 'Fried Chicken',
              description: 'Fried chicken is a popular dish made by coating chicken pieces in seasoned flour or batter...',
              image: '../images/fried-chicken.jpg'
            })}>
              {isFavorite('fried-chicken') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Chocolate Chip Cookie </h1>
            <div className="box_for_cookie_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A chocolate chip cookie is a drop cookie that features chocolate chips as its distinguishing ingredient. </p>
              <p className='sentence'> The dough typically consists of butter, both brown and white sugar, eggs, vanilla extract, baking soda, </p>
              <p className='sentence'> and flour. Originating in the United States in the 1930s, the chocolate chip cookie has become an iconic </p>
              <p className='sentence'> treat enjoyed globally. These cookies are cherished for their chewy or crispy texture, which can be </p>
              <p className='sentence'> adjusted by altering the baking time and ingredient proportions. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'chocolate-chip-cookie',
              name: 'Chocolate Chip Cookie',
              description: 'A chocolate chip cookie is a drop cookie that features chocolate chips as its distinguishing ingredient...',
              image: '../images/chocolate-chip-cookie.jpg'
            })}>
              {isFavorite('chocolate-chip-cookie') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default American_Cousine;

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
