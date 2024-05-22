import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import SecretPage from "./views/Secret";
import Navbar from "./components/Navbar";
import { URL } from "./config";
import * as jose from "jose";
import Turkish_Cousine from "./views/Turkish_Cousine";
import Italian_Cousine from "./views/Italian_Cousine";
import Chinese_Cousine from "./views/ChineseCousine";
import Mexican_Cousine from "./views/Mexican_Cousine";
import American_Cousine from "./views/American_Cousine";
import French_Cousine from "./views/French_Cousine";
import Indian_Cousine from "./views/Indian_Cousine";
import Brazilian_Cousine from "./views/Brazilian_Cousine";
import Greek_Cousine from "./views/Greek_Cousine";
import Favorites from "./views/Favorites";
import Search from "./views/Search";
import RecipeDetails from './views/RecipeDetails';
import LearnMore from "./views/LearnMore";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) {
          setIsLoggedIn(false);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.post(`${URL}/users/verify_token`);
          console.log('Token verification response:', response.data); // Add log here

          if (response.data.ok) {
            const decoded = response.data.decoded;
            login(token, decoded.userId); // Pass userId to login function
            fetchFavorites(decoded.userId); // Fetch favorites for the user
          } else {
            logout();
          }
        }
      } catch (error) {
        console.log(error);
        
      }
    };
    verifyToken();
  }, [token]);

  const login = (token, userId) => {
    let decodedToken = jose.decodeJwt(token);
    let user = {
      email: decodedToken.userEmail,
      id: userId // Use the userId from the decoded token
    };
    localStorage.setItem("token", JSON.stringify(token));
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setFavorites([]);
  };

  const fetchFavorites = async (userId) => {
    try {
      const response = await axios.get(`${URL}/api/user/favorites/${userId}`);
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleFavorite = async (meal) => {
    const isFavorite = favorites.some(fav => fav.id === meal.id);
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter(fav => fav.id !== meal.id);
      setFavorites(updatedFavorites);
      try {
        await axios.delete(`${URL}/api/user/favorites/${user.id}/${meal.id}`);
      } catch (error) {
        console.error('Error deleting favorite:', error);
      }
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, meal];
      setFavorites(updatedFavorites);
      try {
        await axios.post(`${URL}/api/user/favorites`, { userId: user.id, food: meal });
      } catch (error) {
        console.error('Error saving favorite:', error);
      }
    }
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={isLoggedIn ? (<Navigate to="/secret-page" />) : (<Login login={login} />)} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/secret-page" /> : <Register />} />
        <Route path="/secret-page" element={<SecretPage logout={logout} user={user} />} />
        <Route path="/turkish_cousine" element={<Turkish_Cousine handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/italian_cousine" element={<Italian_Cousine handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/chinese_cousine" element={<Chinese_Cousine  handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/mexican_cousine" element={<Mexican_Cousine  handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/american_cousine" element={<American_Cousine  handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/french_cousine" element={<French_Cousine  handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/indian_cousine" element={<Indian_Cousine  handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/brazilian_cousine" element={<Brazilian_Cousine handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/greek_cousine" element={<Greek_Cousine handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/learn" element={<LearnMore />} />
      </Routes>
    </Router>
  );
}

export default App;
