import express from ("express")
const app = express();
const path = require('path');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route
app.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
