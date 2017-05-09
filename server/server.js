const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({ name: 'Hello, world!' });
});

app.get('/users', (req, res) => {
  res.send([{ name: 'Taya', age: 24 }, { name: 'Uladzimir', age: 32 }, { name: 'Andrey', age: 32 }]);
});

app.listen(3000, (err) => err ? err : console.log(`port 3000 is opened.`));

module.exports.app = app;
