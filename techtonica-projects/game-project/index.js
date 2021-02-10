const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('submit');
const guessField = document.getElementById('guessField');

// random value generated 
var randNum=  Math.floor(Math.random() * 10) + 1;
let guess = 0;

const guess_counter = document.getElementById('guess_counter').innerHTML = "Number of guesses: " + guess;

function resetGame() {
  randNum=  Math.floor(Math.random() * 10) + 1;
  guess = 0;  
}

myButton.addEventListener('click', () => {
  var x = guessField.value;
  
  if (x==randNum) {
    alert("Yay! You got it!");
    guess++;
    resetGame();

  }
  else if (x> randNum) {
    guess++;
    alert("Hm. Maybe try a smaller number?");
  } else if (x < randNum) {
    guess++;
    alert("Perhaps a greater number?");
  } else {
    alert("Please enter a number between 0 and 10.");
  }
  guessField.value = "";
  guessField.focus();
  
});


// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//   let userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = 'Previous guesses: ';
//   }
// }

// guesses.textContent+= userGuess + ' '; 
// checkGuess();



/* task list: 
- create a function for difficulty. correlate name and return with the html sheet. */



/* ----- game mechanics ------*/
// have user choose range of the secret number. 
//ranges: easy 0-10, medium 0-100, hard 0-1000


// // function chooseRange(user_click) {
// //   console.log("Please pick your difficulty:")

// //   var easyLimit = 10;
// //   var medLimit = 100;
// //   var hardLimit = 1000;

// //   var gameDiff = 0;

// //   if (user_click = easy) {
// //     gameDiff = easyLimit;
// //   } else if (user_click = medium) {
// //     gameDiff = medLimit;
// //   } else {
// //     gameDiff = hardLimit;
// //   }
// //   return gameDiff;

// // }

// // chooseRange();
// // // generate secret random number using Math.random. 
// // function randNum() {
// //   var y = Math.floor(Math.random() * 10 + 1);
// //   return y;
// // }

// // console.log(randNum());

// // //user picks a number 

// // // for each guess, game should display whether answer is higher, lower, or correct. do this until the user guesses the right number. 

// // // track user's wrong guesses. 
// // var wrongInput = [];

// // // counting the number of guesses 
// // var numGuesses = 0;

// // // made for correct Guess 
// // var guess = 1;


// /*
// document.getElementById("guessField").onclick = function checkGuess () {

//     // number guessed by user	 
//     var x = document.getElementById("guessField").value;

//     if (x == y) {
//       alert("Yay, you got it!");
//     } else if (x > y)
//     //  if guessed number is greater 
// 				than actual number
//     {
//       guess++;
//       alert("Try a lower number.");
//     } else {
//       guess++;
//       alert("Try a greater number.")
//     }
//   } 		 

  // */

//  test lines 
//  function checkGuess1() {
//    alert('I am a placeholder');
//  }
 
//  checkGuess1();

 