/**
 * Add all your DOM event handlers and other UI code in this file.
 */



document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();

  // Refreshes Events
  // Builds HTML list for all event. You must call this function after you change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all
      .map((event) => `<li>${event.name} #${event.id} Date: ${event.date} Category: ${event.category}</li>`)
      .join("\n");
  };

// Adds Events
  const addEventForm = document.querySelector("#add-event");

  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const date = document.querySelector("#add-event-date").value;
    const category = document.querySelector("#add-event-category").value;
    // debugger;
    const event = app.addEvent(name, date, category);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });

  // Refreshes Users
  const refreshUserList = () => {
      document.querySelector("#users-list").innerHTML = User.all
      .map((user) => `<li>${user.name} #${user.id}</li>`)
      .join("\n");
  };

  // Adds Users
  const addUserForm = document.querySelector("#add-user");

  addUserForm.addEventListener("submit", (submitUser) => {
    // submitUser.preventDefault();
    const userName = document.querySelector("#add-username").value;
    const user = app.addUser(userName);
    console.log("Added user", user);
    refreshUserList();
    addUserForm.reset();
  });

  // Deletes Events
  const delEventForm = document.querySelector("#delete-event");

  delEventForm.addEventListener("submit", () => {
    const delEvent = parseInt(document.querySelector("#delete-event-id").value);
    app.deleteEvent(delEvent);
    console.log("Deleted event");
    refreshEventsList();
    delEventForm.reset();
    });

  // Deletes Users
  const delUserForm = document.querySelector("#delete-user");

  delUserForm.addEventListener("submit", () => {
    const delUser = parseInt(document.querySelector("#delete-user-id").value);
    app.deleteUser(delUser);
    console.log("Deleted event");
    refreshUserList();
    delUserForm.reset();
    });

});
