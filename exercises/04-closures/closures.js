/**
 * Use closures to complete this exercise.
 * For those of you who are familar with object-orientened programming,
 * this exercise will use a similar pattern with "setters" and "getters".
 * @returns {Object} an object that has two methods. See comments below.
 */
//const calculator = () => {
/**
 * Create a private variable called "sum"
 * @var {number}
 */
/**
 * Return an object that has two methods:
 *
 * 1. The first is a "setter" function that a.) accepts a parameter of type number and
 *    b.) adds that number to the "sum" above.
 * @param {number}
 *
 * 2. The second function is a "getter" function
 * that should return the value of "sum" above.
 * @returns {number} the value of sum
 */

//const calculator = () => {
// const calculator = (total) => {
//   //let total = [];
//   return {
//   //getSum: function(num) {
//     getSum (num) {
//       return total = total + num;
//     },
//     //getSubstract: function(num) {
//     getSubstract(num) {
//       return total = total - num;
//     },
//     //getMultiply: function(num) {
//     getMultiply(num) {
//       return total = total * num;
//     },
//     //getDevide: function(num) {
//     getDevide(num) {
//       return total = total / num;
//     },
//     //addTotal: function(total) {
//     addTotal(total) {
//       return total = total.push(total);
//       //return total;
//     }
//   }
// };

// Getters and setters https://javascript.info/property-accessors#getters-and-setters
const calculator = () => {
  var sum = 0;
  return {
    setter: function(num) {
      sum = sum + num;
      return sum;
    },
    getter: function() {
      return sum;
    }
  };
};

/**
 * Write a function called guessingGame which takes in one parameter amount.
 * The function should return another function that takes in a parameter called guess.
 * In the outer function, you should create a variable called answer which is
 * the result of a random integer between 0 and 10 as well as a variable called guesses which should be set to 0.
 *
 * In the inner function, if the guess passed in is the same as the random integer (defined in the outer function),
 * you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
 *
 * You will have to make use of closure to solve this problem.
 *
 * @example (yours might not be like this, since the answer is random every time):
 *
 * var guessRound1 = guessingGame(5); // Allowing only 5 guesses
 * guessRound1(1); // "You're too low!"
 * guessRound1(8); // "You're too high!"
 * guessRound1(5); // "You're too low!"
 * guessRound1(7); // "You got it!"
 *
 * var guessRound2 = guessingGame(3); // Allowing only 3 guesses
 * guessRound2(5); // "You're too low!"
 * guessRound2(3); // "You're too low!"
 * guessRound2(1); // "No more guesses. The answer was 0"
 */

//const guessingGame = numberOfRounds => {};

//Generate a random number between 0 - 10 to be guessed
//let guess = Math.ceil(Math.random() * 10) + 1;
// let guess = Math.round(Math.random() * 10);

// const guessingGame = numberOfRounds => {
//   let guesses = 0;
//   //let answer = parseInt(answer.value);
//   //let guess = 7;
//   //let guess2 = 0;
//   //numberOfRounds = 3;
//   //let numberOfRounds2 = 5;
//   return function(answer) {
//   // guess = prompt("Guess a number between 1-10. Wht's your guess?");
//     guess = alert("Guess a number between 1-10. Wht's your guess?");
//     if (guesses < numberOfRounds && answer) {
//       guesses++;
//       if (answer < guess) {
//         //guess = prompt("You're too low!");
//         return alert("You're too low!");
//       }
//       if (answer > guess) {
//         //guess = prompt("You're too high!");
//         return alert("You're too high!");
//       }
//       if (answer === guess) {
//         return alert("You got it!");
//         //It was " + guess + "." +  " It only took you " + guesses + " tries to get right.");
//       }
//     } else if (guesses === numberOfRounds) {
//       return alert("No more guesses. The answer was" + guess);
//     }
//     return false;
//   };
// };

// const guessingGame = numberOfRounds => {
//   //let answer = Math.floor(Math.random() * 11);
//   let answer = Math.round(Math.random() * 10);
//   let guesses = 0;
//   return (guess) => {
//     if (guesses <= numberOfRounds) {
//       if (guess === answer) {
//         guesses = guesses++;
//         return "You got it!";
//       } else if (guess > answer) {
//         guesses = guesses++;
//         return "You're too high!";
//       } else if (guess < answer) {
//         guesses = guesses++;
//         return "You're too low!";
//       }
//     } else {
//      return "No more guesses. The answer was " + answer;
//     }
//   };
// };


//Closure https://javascript.info/closure
//const guessingGame = numberOfRounds => {};
const guessingGame = numberOfRounds => {
  //Generate a random number between 0 - 10 to be guessed
  let answer = Math.round(Math.random() * 10);

  return (guess) => {
    if (guess === answer) return "You got it!";
    else if (numberOfRounds === 0) return "No more guesses. The answer was " + answer;
    else if (guess > answer){
      numberOfRounds--;
      return "You're too high!";
    }
    else if(guess < answer){
      numberOfRounds--;
      return "You're too low!";
    }
  }
};


module.exports = {
  calculator,
  guessingGame
};
