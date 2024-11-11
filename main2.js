const express = require('express');
const app = express();

// Middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
};
app.use(timeLog);

// Define the home page route
app.get('/', (req, res) => {
  res.send('Birds home page');
});

// Define the about route
app.get('/about', (req, res) => {
  res.send('About birds');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
