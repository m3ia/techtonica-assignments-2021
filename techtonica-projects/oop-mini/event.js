class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    this.addAvailableTickets = function (type, price) {
      this.availableTickets.push({
        type: type,
        price: price
      });
    };

    this.allTickets = (() => {
      let newStr = "All tickets: ";
      let num = 1;
      for (let i = 0; i < this.availableTickets.length; i++) {
        newStr += (num + ". " + this.availableTickets[i].type + " \(\$" + this.availableTickets[i].price + "\) ");
        num += 1;
      }
      return newStr;
    });

    this.searchTickets = ((lower, upper) => {
      let newStr = "No tickets available. "
      let num = 1;
      //not sure why this is only picking up 1 and not multiple. 
      for (let i = 0; i < this.availableTickets.length; i++) {
        if (this.availableTickets[i].price >= lower && this.availableTickets[i].price <= upper) {
          if (num === 1) {
            newStr = "Eligible Tickets: ";
          }
          newStr += (num + ". " + this.availableTickets[i].type + " \(\$" + this.availableTickets[i].price + "\) ");
          num += 1;
        }

      }         
      return newStr; //return list of ticket types

    });


  }
}


// The below statement creates an object.
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

$(document).ready(function () {
  let html = '';
  $.each(eventArray, function (index, item) {
    html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 100)}</li>`;
  });
  // insert final html into #event...
  $('#event').html(html);
});

class TicketType {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}


eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

// console.log(eventObj1.availableTickets[0].type);

/* alternative searchTickets function:
this.searchTickets = ((lower, upper) => {
  const eligibleTickets = this.availableTickets.filter((ticket) => {
    return ticket.price >= lower && ticket.price <= upper;
  });
  if (eligibleTickets.length > 0) {
    const ticketString = eligibleTickets.map((ticket, index) => {
      return `${index + 1}. ${ticket.type} (\$${ticket.price})`;
    }).join(' ');
    return `Eligible Tickets: ${ticketString}`;
  }
  return "No tickets available. ";
}); */

