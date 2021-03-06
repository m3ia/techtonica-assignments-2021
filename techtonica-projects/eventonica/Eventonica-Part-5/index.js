const express = require('express');

// import addEvent from './models.js';
// const models = require('./models.js');
// const eventonica = models.eventonica;
const { Eventonica, User, Event, testEvent } = require('./models.js');
const eventonica = new Eventonica(); 

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

app.route('/events').get((req, res) => {
  // res.status(200).send(eventonica.Event.all);
  res.send(Event.all);
  console.log(Event.all);
});

app.route('/users').get((req, res) => {
  res.send(User.all);
});

// app.route('/users/)

// 