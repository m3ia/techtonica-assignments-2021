// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting() {
  console.log("Hello!")
}
logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName(myName) {
  let gettingName = myName;
  return gettingName;
}
// console.log(getName("Meia"));

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2(name) {
  let greeting = "Hello! My name is " + getName(name) + ".";
  return greeting;
}
console.log(logGreeting2("George")
);

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function newSum (num1, num2, num3) {
  return num1+num2+num3;
}

// newSum(4,5,6);
// console.log(newSum(1,2,3));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
function discountThem (age) {
  if ((age <= 14 && age >=0) || age >= 65) {
    console.log(true);
  } else if (age < 0) {
    console.log("Age must be greater than 0.");
  } else {
    console.log(false);
  }
}

// discountThem(12);
// discountThem(65);
// discountThem(14);
// discountThem(0);
// discountThem(-12);
// discountThem(23);
// discountThem(1234);

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
function printString (num, str) {
  for (let i=1; i<=num; i++) {
    console.log(i + ") " + str);
  }
}

// printString(0, "hello");
// printString(1, "one time");
// printString(2, "two times");
// printString(12, "twelve times"); 

// Exercise 7. Read the following code (don't run it yet)


function mysteryFunction1(num) {
  return num * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// Answer: mysteryFunction1 takes an argument and multiples it by 2.

//If p1 is a number, this should work. However, if it is anything other than a number, it will not complete, or result in NaN.

// 2. What prints out for the value of y
//Answer: The value of y will print as 4.

// 3. What prints out for the value of z
//Answer: The value of z will always be the result of mysteryFunction1(y). As long as y is 4, z will result in 8. 

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
//I was correct!


// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
//Answer: mysteryFunction2 takes two arguments: p1 and p2, and returns the constant x which would be the result of p1 - p2.

// 2. What prints out for the value of a
//Answer: Value a will print 10-4, which is 6.

// 3. What prints out for the value of b
//Answer: Value b will print const a (which is 6) - 1, which will be 5.

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
//Answer: Yes!

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
const items = groceryList.split(",");
console.log(items);

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
const secondThing = [mySchedule.split("--->")[0], mySchedule.split("--->")[1]]
// console.log(secondThing);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// Answer: I found this easy, but challenging!
// References: For split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.