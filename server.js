const express = require('express')
const app = express();

const PORT = 8080;

const reservations = [];

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})



app.listen('/tmp/sock')