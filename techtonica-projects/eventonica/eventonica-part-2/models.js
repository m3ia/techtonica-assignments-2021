/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */

const user_Name = document.getElementById("add-user-name").value;

class Event {
  static all = [];
  static _nextId = 100;

  constructor(name, location, startDate, endDate, startTime, endTime, desc, price, categories) {
    this.name = name;
    this.id = Event._nextId++;
    this.location = location;
    this.startDate = startDate;
    this.endDAte = endDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.desc = desc;
    this.price = price;
    this.categories = categories;

    Event.all.push(this); // keep track of all created instances

        // properties: event name, place/link, time, description, organizer, category (career? presentation? live show? entertainment? group)
    // decide what properties are required

  }

  static findByDate(/* user input (date) and click */) {
    // searches over constructor objects for events that have dates that occur on this set date. 
    return [];
  }

  static findByCategory(/* checkbox input / click  */) {
    // searches for events that check a category array for each event object for the selected category
    return [];
  }
}

class User {
  static all = [];
  static _nextId = 200;

  constructor(firstName, lastName, username, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = User._nextId++;
    this.username = username;
    this.email = _email;
    this.password = _password;
    // decide what properties are required on an instance
    User.all.push(this); // keep track of all created instances
  }
  

  //add favorite function, collection
  favorite () {
    // get and set 
  }

}

class Eventonica {
  addEvent(name, location, startDate, endDate, startTime, endTime, desc, price, categories) {
    // have a field for each piece of input
    // create a function so user can enter input
    // create a submit button. onlick, will erase everything, parse all input, and enter it into an object for the user.
    //maybe first checks to see if the user is signed in or needs to sign up for an account? 

    // Adds a new Event

    new Event(name, location, startDate, endDate, startTime, endTime, desc, price, categories);

  }

  updateEvent(id, targetProp, newProp) {
    // user can view their events and click a button to edit all input.
    // upon clicking submit, new info will replace the old.
    // user should be given option to cancel editing without submitting changes. 

    // Update existing Event
    // change property to a new property 
    
    Event.all.find(event => event.id === id);
    Event.targetProp = newProp.value //need to check this 

  }

  deleteEvent(id) {
    // user can click a button. an alert will confirm with the user that they want to delete the event. once deleted, the info for that object will be removed. 
    // Deletes Event
    Event.all = Event.all.filter(Event[id]);
  }

  findEventsByDate(date) {
    // user will be able to enter a starting date and an ending date; 
    // user will be given results of events that fall between those dates.
    // Return items in Event.all with a specified date
    Event.all.filter(date => 
      date > Event[startDate] && date < Event[endDate]);
  }

  findEventsbyCategory(category) {
    // user will be able to view different categories --mapped to event property. upon clicking one, all events tagged in that category will be viewable in a list. all events will be actionable.
    // try using strings to store the categories to place within an array or array of objects? 
    // Return items in Event.all with a specified category
    // have something that iterates over each checkbox rather than creating a variable for each.
    Event.all.filter(category.includes(category) === true);
  }

  addUser(firstName, lastName, username, email, password) {
    new User(firstName, lastName, username, email, password);
    // a user will be able to view and click a sign-up button and enter their info: name, email, password. user key will be generated via a private api. user info will be stored.
    // Adds a new User

  }

  updateUser(id, prop, newProp) {
    // user will be able to edit info, such as email, name, and password. might require some confirmation actions. 
    // Update existing User
    User[id][prop] = newProp.value; 

  }

  deleteUser(id) {
    // user will be able to view an option to delete their account in an account page. once deleted, user info can be deleted and unaccessable unless user wants to sign up again, 
    // Deletes User
    User.all = User.all.filter(User[id]);

  }
}

if (typeof module !== "undefined") {
  module.exports = {
    Eventonica,
    User,
    Event
  };
}