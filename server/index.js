const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3040;

// Middleware
app.use(cors({
  origin: process.env.REACT_APP_API_URL || 'http://localhost:3000', // Ensure the origin is correctly set for development and production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
mongoose.set('debug', true);

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the DB');
  } catch (error) {
    console.error('ERROR: Seems like your DB is not running, please start it up !!!');
    console.error('Detailed Error:', error);
  }
}

connectToDatabase();

// Log environment variables for debugging
console.log('MongoDB Connection String:', process.env.MONGO);
console.log('Port:', process.env.PORT);
console.log('Spoonacular API Key:', process.env.SPOONACULAR_API_KEY);

// Routes
app.use('/users', require('./routes/users.routes'));
app.use('/api/user/favorites', require('./routes/favorites_routes'));

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

app.get('/api/recipes', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        query,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// The "catchall" handler: for any request that doesn't match one above,
// send back the React app's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
