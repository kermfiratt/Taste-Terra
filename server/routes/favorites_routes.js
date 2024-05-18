const express = require('express');
const router = express.Router();
const User = require('../models/users.model');
const Food = require('../models/Food');

// Add a favorite
router.post('/', async (req, res) => {
  try {
    const { userId, food } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    let favoriteFood = await Food.findOne({ name: food.name });
    if (!favoriteFood) {
      favoriteFood = new Food(food);
      await favoriteFood.save();
    }

    user.favorites.addToSet(favoriteFood._id);
    await user.save();

    res.status(200).send('Favorite added');
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).send('Server error');
  }
});

// Get user favorites
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('favorites');

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json(user.favorites);
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).send('Server error');
  }
});

// Delete a favorite
router.delete('/:userId/:foodId', async (req, res) => {
  try {
    const { userId, foodId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    user.favorites.pull(foodId);
    await user.save();

    res.status(200).send('Favorite deleted');
  } catch (error) {
    console.error('Error deleting favorite:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
