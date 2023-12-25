const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory "database"
const wishesDatabase = [];

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to get all wishes
app.get('/wishes', (req, res) => {
    res.json(wishesDatabase);
});

// Endpoint to submit a wish
app.post('/submit-wish', (req, res) => {
    const { name, email, wish } = req.body;

    if (name && email && wish) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        const wishItem = {
            name: name,
            email: email,
            wish: wish,
            timestamp: formattedDate,
        };

        // Add wish to the database
        wishesDatabase.push(wishItem);

        res.status(200).json({ message: 'Wish submitted successfully!' });
    } else {
        res.status(400).json({ error: 'Invalid data. Please provide name, email, and wish.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
