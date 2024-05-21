import React from 'react';
import './Learn_More.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const LearnMore = () => {


    let navigate = useNavigate();


    const handle_join = () => {
        navigate('/secret-page');
      };








  return (

<div>
<header className="header_style">
        <div className="navigator">
         
          <div>
            <NavLink to={'/secret-page'} style={({ isActive }) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>Cousine's</NavLink>
          </div>
         
         
         
        </div>
      </header>












    <div className="learn-more-container">
      <section className="intro">
        <h1>Welcome to Taste Terra</h1>
        <p>Discover our recommendations in world cuisines and search for meals around the globe.</p>
      </section>

      

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Simply search for your favorite meals or ingredients, and we'll provide you with the best recipes and cooking instructions.</p>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"Taste Terra has revolutionized my cooking! I love exploring new cuisines."</p>
          <p>- Happy User</p>
        </div>
      </section>

      <section className="cta">
        <h2>Join Taste Terra Today!</h2>
        <button onClick={handle_join} className="cta-button">Get Started</button>
      </section>
    </div>

    </div>
  );
};

export default LearnMore;


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
  