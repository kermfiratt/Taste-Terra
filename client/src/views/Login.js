
import React, { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { useNavigate } from "react-router-dom";
import * as jose from "jose";

const Login = (props) => {
  const [form, setValues] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/users/login`, {
        email: form.email.toLowerCase(),
        password: form.password,
      });

      setMessage(response.data.message);

      if (response.data.ok) {
        let decodedToken = jose.decodeJwt(response.data.token);
        setTimeout(() => {
          props.login(response.data.token, response.data.user);
          navigate("/secret-page");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateButton = () => {
    navigate('/register');
  };

  const handleWithoutRegister = () => {
    navigate('/secret-page');
  };

  const handle_learn_click = () => {
    navigate('/learn');
  };

  return (





    
    <div className="form_and_info special">




      <form onSubmit={handleSubmit} onChange={handleChange} className="form_container">
      <h1 className="typewriter">Taste Terra</h1>
        <label>Email</label>
        <input name="email" placeholder="email" />

        <label>Password</label>
        <input type="password" name="password" placeholder="password" />

        <button type="submit">Login</button>

        <h4>Haven't signed up yet?</h4>
        <button type="button" onClick={handleCreateButton}>Create an Account</button>

        <div className="message">
          <h4>{message}</h4>
        </div>
        

        <div>
        <button type="button" onClick={handleWithoutRegister}>Continue Without Register</button>
        </div>

      </form>







      <div className="info_section">
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item">Hello</li>
              <li className="content__container__list__item">Merhaba</li>
              <li className="content__container__list__item">Bonjour</li>
              <li className="content__container__list__item">Ciao</li>
            </ul>
          </div>
        </div>
        <p>Welcome to Taste Terra</p>
        <p>Discover World Flavors, One Recipe at a Time!</p>
        <p>To Learn More, Click The Button Below</p>

        <div>
        <button onClick={handle_learn_click}>Learn More</button>
        </div>


      </div>
    </div>
  );
};

export default Login;
