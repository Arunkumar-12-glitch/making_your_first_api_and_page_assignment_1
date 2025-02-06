// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

// Route for root ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Virtual Assistant API!');
});

// Route for /assistant/greet
app.get('/assistant/greet', (req, res) => {
  const userName = req.query.name || 'Guest'; // Default to 'Guest' if no name provided
  const currentDay = new Date().getDay();

  let dayMessage = 'Have a wonderful day!';
  
  if (currentDay === 1) {
    dayMessage = 'Happy Monday! Start your week with energy!';
  } else if (currentDay === 5) {
    dayMessage = "It's Friday! The weekend is near!";
  }

  res.json({
    welcomeMessage: `Hello, ${userName}! Welcome to our assistant app!`,
    dayMessage: dayMessage,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
