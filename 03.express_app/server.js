const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello, Express!</h1>');
  res.send({
    name: 'Uladzimir',
    likes: [
      'Coding',
      'Running'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);