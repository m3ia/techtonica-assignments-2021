const express = require('express');

// import addEvent from './models.js';
const Eventonica = require('./models.js');
// console.log(Example.test());
// const main = require('./main.js');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// to do: create a directory in eventonica called "server" and all server-related files should go there, and create another called "app". models --> server. 

app.listen(port, () => {
  console.log(`Server running port ${port}...`)
})

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/events', (req, res) => {
  res.send(Eventonica.Event.all);
});