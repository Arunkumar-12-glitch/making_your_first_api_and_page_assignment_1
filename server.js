const express = require('express');
const app = express();

// Endpoint to handle the /assistant/greet route
app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name;  // Get the name query parameter
    
    // If no name is provided, return an error
    if (!userName) {
        return res.status(400).json({ error: 'Name query parameter is required' });
    }

    // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date().getDay();  // Get current day number (0-6)
    
    // Determine the day-specific message
    const dayMessage = getDayMessage(currentDay);

    // Create the response object
    const response = {
        welcomeMessage: `Hello, ${userName}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    };

    // Send the response as JSON
    res.json(response);
});

// Helper function to determine the day-specific message
function getDayMessage(day) {
    switch (day) {
        case 1: return "Happy Monday! Start your week with energy!";
        case 5: return "It's Friday! The weekend is near!";
        case 0: return "Enjoy your Sunday!";
        case 6: return "Have a relaxing Saturday!";
        default: return "Have a wonderful day!";
    }
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
