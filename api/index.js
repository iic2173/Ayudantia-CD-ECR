const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET endpoint
app.get('/', (req, res) => {
  res.send('Hello World! This is a GET request');
});

// POST endpoint
app.post('/', (req, res) => {
  const requestBody = req.body;
  // Do something with the request body, for example, log it
  console.log('Received POST request with body:', requestBody);
  res.send('POST request received successfully.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
