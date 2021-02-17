/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */

class Eventonica {

  addEvent(/* user input + user clicks submit? */) {
    // have a field for each piece of input
    // create a function so user can enter input
    // create a submit button. onlick, will erase everything, parse all input, and enter it into an object for the user.
    //maybe first checks to see if the user is signed in or needs to sign up for an account? 

    // Adds a new Event
    return new Event(name);

  }

  updateEvent(/* user input + user clicks submit? */) {
    // user can view their events and click a button to edit all input.
    // upon clicking submit, new info will replace the old.
    // user should be given option to cancel editing without submitting changes. 

    // Update existing Event
  }

  deleteEvent(/* user clicks delete button? */) {
    // user can click a button. an alert will confirm with the user that they want to delete the event. once deleted, the info for that object will be removed. 
    // Deletes Event
  }

  findEventsByDate(/* user selects a date and clicks submit? */) {
    // user will be able to enter a starting date and an ending date; 
    // user will be given results of events that fall between those dates.
    // Return items in Event.all with a specified date
  }

  findEventsbyCategory(/* user selects 1 or more categories from checkboxes and clicks submit? */) {
    // user will be able to view different categories --mapped to event property. upon clicking one, all events tagged in that category will be viewable in a list. all events will be actionable.
    // try using strings to store the categories to place within an array or array of objects? 
    // Return items in Event.all with a specified category
    // have something that iterates over each checkbox rather than creating a variable for each.
  }

  addUser(/* user enters input and clicks register? */) {
    // a user will be able to view and click a sign-up button and enter their info: name, email, password. user key will be generated via a private api. user info will be stored.
    // Adds a new User
  }

  updateUser(/* user input box, click */) {
    // user will be able to edit info, such as email, name, and password. might require some confirmation actions. 
    // Update existing User
  }

  deleteUser(/* user click */) {
    // user will be able to view an option to delete their account in an account page. once deleted, user info can be deleted and unaccessable unless user wants to sign up again, 
    // Deletes User
  }
}

class Event {
  static all = [];
  static _nextId = 100;

  constructor(/* event name, place, etc... */) {
    this.name = name;
    this.id = Event._nextId++;
    this.id = Event._nextId++;
    // properties: event name, place/link, time, description, organizer, category (career? presentation? live show? entertainment? group)
    // decide what properties are required
    Event.all.push(this); // keep track of all created instances
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

// event area
class Event {
  static all = [];
  static _nextId = 100;


  }

// user area 
class User {
  static all = [];
  static _nextId = 200;

  constructor(/* username, name, email, password?  */) {
    this.id = User._nextId++;
    // decide what properties are required on an instance
    User.all.push(this); // keep track of all created instances
  }
  
  //add favorite function, collection
  favorite () {
    // get and set 
  }

}

// class User {}

// class Eventonica {
//   addEvent(name) {
//     return new Event(name);
//   }
// }

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}
