// Secret.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SecretPage = (props) => {
  let navigate = useNavigate();

  const handle_turkish_click = () => {
    navigate('/turkish_cousine');
  };

  const handle_italian_click = () => {
    navigate('/italian_cousine');
  };

  const handle_chinese_click = () => {
    navigate('/chinese_cousine');
  };

  const handle_mexican_click = () => {
    navigate('/mexican_cousine');
  };

  const handle_american_click = () => {
    navigate('/american_cousine');
  };

  const handle_french_click = () => {
    navigate('/french_cousine');
  };

  const handle_indian_click = () => {
    navigate('/indian_cousine');
  };

  const handle_brazilian_click = () => {
    navigate('/brazilian_cousine');
  };

  const handle_greek_click = () => {
    navigate('/greek_cousine');
  };

  const handle_favorites_click = () => {
    navigate('/favorites');
  };

  return (
    <div className="special">
      <header className="header_style">
        <div className="navigator">
         

          <div>
            <NavLink to={'/secret-page'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Cousine's</NavLink>
          </div>


          <div>
            <NavLink to={'/search'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Search</NavLink>
          </div>

          <div>
            <NavLink to={'/favorites'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Favorites</NavLink>
          </div>

          <div>
            <NavLink onClick={() => { props.logout(); }} to={'/'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Log Out</NavLink>
          </div>
        </div>
      </header>

      <div className="first_3_cousine">
        <div className="padding_for_flags">
          <h1 className="cousine_names">Turkish Cousine</h1>
          <section className="turkish" onClick={handle_turkish_click}></section>
        </div>

        <div className='padding_for_flags'>
          <h1 className="cousine_names">Italian Cousine</h1>
          <section className="italian" onClick={handle_italian_click}></section>
        </div>

        <div className='padding_for_flags'>
          <h1 className="cousine_names">Chinese Cousine</h1>
          <section className="chinese" onClick={handle_chinese_click}></section>
        </div>
      </div>

      <div className="second_3_cousine">
        <div className='padding_for_flags'>
          <h1 className="cousine_names">Mexican Cousine</h1>
          <section className="mexican" onClick={handle_mexican_click}></section>
        </div>

        <div className='padding_for_flags'>
          <h1 className="cousine_names">American Cousine</h1>
          <section className="american" onClick={handle_american_click}></section>
        </div>

        <div className='padding_for_flags'>
          <h1 className="cousine_names">French Cousine</h1>
          <section className="french" onClick={handle_french_click}></section>
        </div>
      </div>

      <div className="third_3_cousine">
        <div className='padding_for_flags'>
          <h1 className="cousine_names">Indian Cousine</h1>
          <section className="indian" onClick={handle_indian_click}></section>
        </div>

        <div className='padding_for_flags'>
          <h1 className="cousine_names">Brazilian Cousine</h1>
          <section className="brazilian" onClick={handle_brazilian_click}></section>
        </div>

        <div className='padding_for_flags'>
          <h1 className="cousine_names">Greek Cousine</h1>
          <section className="greek" onClick={handle_greek_click}></section>
        </div>
      </div>

      <footer>
        <div className="pad-top">
          <p>Copyrigth &copy;2024</p>
          <p>Kerem Hamza FIRAT</p>
        </div>
      </footer>
    </div>
  );
};

export default SecretPage;

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
