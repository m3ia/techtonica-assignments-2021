"use strict";

var express = require('express'); // import addEvent from './models.js';


var models = require('./models.js'); // const eventonica = models.Eventonica();
// const { Eventonica, User, Event, testEvent } = require('./models.js');
// const eventonica = new Eventonica(); 


var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // to do: create a directory in eventonica called "server" and all server-related files should go there, and create another called "app". models --> server. 

app.listen(port, function () {
  console.log("Server running port ".concat(port, "..."));
});
app.get('/', function (req, res) {
  res.send("Hello World!");
});
app.route('/events').get(function (req, res) {
  // res.status(200).send(eventonica.Event.all);
  res.send(Event.all);
  console.log(Event.all);
});
app.route('/users').get(function (req, res) {
  res.send(models.User.all);
});
app.route('/sky').get(function (req, res) {
  res.send(models.sky);
}); // app.route('/users/)
//