const express = require('express');
const app = express();

// Define the endpoint for "/assistant/greet"
app.get('/assistant/greet', (req, res) => {
    // Retrieve the "name" query parameter from the request
    const userName = req.query.name;

    // If no name is provided, return an error message
    if (!userName) {
        return res.status(400).send({
            error: 'Name query parameter is required'
        });
    }

    // Array to map days of the week to their names
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the current day of the week (0-6)
    const currentDay = new Date().getDay();
    const dayMessage = getDayMessage(currentDay);

    // Construct the response object
    const response = {
        welcomeMessage: `Hello, ${userName}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    };

    // Send the response back to the client
    res.json(response);
});

// Function to return the cheerful message based on the day of the week
function getDayMessage(day) {
    switch (day) {
        case 0: // Sunday
            return "Enjoy your Sunday!";
        case 1: // Monday
            return "Happy Monday! Start your week with energy!";
        case 5: // Friday
            return "It's Friday! The weekend is near!";
        case 6: // Saturday
            return "Have a relaxing Saturday!";
        default: // For Tuesday, Wednesday, Thursday
            return "Have a wonderful day!";
    }
}

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
