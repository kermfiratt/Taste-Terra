const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3040;
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set('debug', true);

async function connecting() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to the DB');
  } catch (error) {
    console.log('ERROR: Seems like your DB is not running, please start it up !!!');
  }
}
connecting();

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
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client', 'golden_day', 'build')));

// The "catchall" handler: for any request that doesn't match one above,
// send back the React app's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'golden_day', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
