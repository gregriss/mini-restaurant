const express = require('express')
var path = require("path");

const app = express();

const PORT = 8080;

const reservations = [
    {
        name: "Jason",
        time: "7:00",
        phone: "555-555-5555",
        numberOfPeople: 5,
        email: "jason@aol.com",
        id: 1,
    }
];


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reservations.html"));
  });

  // Displays all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
