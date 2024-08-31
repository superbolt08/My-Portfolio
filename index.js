import express from "express"
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set the view engine to EJS
app.use(express.static('public')); // helps access css static files
app.use(bodyParser.urlencoded({extended: true})); // middlewear

app.get("/", (req, res) => {
    res.render("index");
});

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})