import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function French_Cousine({ handleFavorite, favorites }) {
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

      <h1> French Cousine </h1>
      <h3> Our Suggestions </h3>

      <div className="french_foods_first">
        <section className="food_container">
          <div>
            <h1> Croissant </h1>
            <div className="box_for_croissant_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A croissant is a buttery, flaky pastry known for its crescent shape and layered texture. Originating in </p>
              <p className='sentence'> France, the pastry is made from a leavened variant of puff pastry, where dough is layered with butter, </p>
              <p className='sentence'> rolled, and folded multiple times. This meticulous process, known as laminating, creates thin layers of </p>
              <p className='sentence'> dough separated by butter that puff up in the oven due to steam. Croissants are enjoyed worldwide, </p>
              <p className='sentence'> often served warm and commonly filled with chocolate, almond paste, or ham and cheese. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'croissant',
              name: 'Croissant',
              description: 'A croissant is a buttery, flaky pastry known for its crescent shape and layered texture...',
              image: '../images/croissant.jpg'
            })}>
              {isFavorite('croissant') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Baguette </h1>
            <div className="box_for_baguette_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> A baguette is a long, thin loaf of French bread that is characterized by its length, crisp crust, and soft, </p>
              <p className='sentence'> airy interior. Traditionally, it is made from basic lean dough, which is a simple mix of flour, water, yeast, </p>
              <p className='sentence'> and salt. The dough undergoes a lengthy fermentation process, which helps develop its unique flavor </p>
              <p className='sentence'> and porous texture. The exterior of the baguette is typically golden-brown and crusty, achieved by </p>
              <p className='sentence'> baking at high temperatures with steam. Baguettes are a staple in French cuisine and are often used for sandwiches, served with cheese, or simply enjoyed with butter. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'baguette',
              name: 'Baguette',
              description: 'A baguette is a long, thin loaf of French bread that is characterized by its length, crisp crust, and soft, airy interior...',
              image: '../images/baguette.jpg'
            })}>
              {isFavorite('baguette') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="french_foods_second">
        <section className="food_container">
          <div>
            <h1> Macarons </h1>
            <div className="box_for_macarons_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Macarons are French pastries made from almond flour, egg whites, and sugar, forming two cookies with </p>
              <p className='sentence'> a creamy filling in between. They feature a crisp shell and chewy interior, often brightly colored and </p>
              <p className='sentence'> available in various flavors. The characteristic "feet," or frilly edges, indicate a well-made macaron. </p>
              <p className='sentence'> Despite their simplicity, they require precise technique to perfect. </p>
              <p className='sentence'> These elegant confections are celebrated globally for their unique textures and array of sophisticated flavors. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'macarons',
              name: 'Macarons',
              description: 'Macarons are French pastries made from almond flour, egg whites, and sugar...',
              image: '../images/macarons.jpg'
            })}>
              {isFavorite('macarons') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Bisque </h1>
            <div className="box_for_bisque_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Bisque is a rich, creamy soup traditionally made from puréed crustaceans, most commonly lobster, </p>
              <p className='sentence'> shrimp, or crab. The process involves sautéing the shellfish with aromatics before simmering in stock </p>
              <p className='sentence'> and then blending to achieve a smooth consistency. Heavy cream and a touch of sherry are often added </p>
              <p className='sentence'> to enhance the luxurious texture and depth of flavor. Bisque is distinguished from other seafood soups </p>
              <p className='sentence'> by its intense seafood flavor and velvety texture, making it a gourmet dish served in fine dining restaurants. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'bisque',
              name: 'Bisque',
              description: 'Bisque is a rich, creamy soup traditionally made from puréed crustaceans...',
              image: '../images/bisque.jpg'
            })}>
              {isFavorite('bisque') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>

      <div className="french_foods_third">
        <section className="food_container">
          <div>
            <h1> Châteaubriand </h1>
            <div className="box_for_chato_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Châteaubriand is a prestigious French dish consisting of a large center cut filet from the tenderloin, </p>
              <p className='sentence'> traditionally beef, which is known for its tenderness and flavor. It is typically grilled or roasted and </p>
              <p className='sentence'> served rare to medium-rare to preserve its juiciness and delicate texture. The meat is often </p>
              <p className='sentence'> accompanied by a sauce, such as Béarnaise or a red wine reduction, enhancing its rich flavors. </p>
              <p className='sentence'> Châteaubriand is usually prepared for two, making it a popular choice for a luxurious and romantic dinner. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'chateaubriand',
              name: 'Châteaubriand',
              description: 'Châteaubriand is a prestigious French dish consisting of a large center cut filet from the tenderloin...',
              image: '../images/chateaubriand.jpg'
            })}>
              {isFavorite('chateaubriand') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>

        <section className="food_container">
          <div>
            <h1> Ratatouille </h1>
            <div className="box_for_ratatouille_image"></div>
            <div className="p_for_exp">
              <p className='sentence'> Ratatouille is a traditional French vegetable stew that originates from Provence. This dish features a </p>
              <p className='sentence'> hearty blend of summer vegetables such as eggplant, zucchini, bell peppers, tomatoes, and onions, </p>
              <p className='sentence'> which are slowly cooked with garlic, herbs, and olive oil. Each ingredient is typically sautéed separately </p>
              <p className='sentence'> before being layered together, allowing for the individual flavors to meld beautifully. Ratatouille can be </p>
              <p className='sentence'> served as a main dish with bread or as a side dish, and it is often even more flavorful when reheated, making it a perfect make-ahead meal. </p>
            </div>
            <button onClick={() => handleFavorite({
              id: 'ratatouille',
              name: 'Ratatouille',
              description: 'Ratatouille is a traditional French vegetable stew that originates from Provence...',
              image: '../images/ratatouille.jpg'
            })}>
              {isFavorite('ratatouille') ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default French_Cousine;

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
