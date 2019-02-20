/**
 * Use closures to complete this exercise.
 * For those of you who are familar with object-orientened programming,
 * this exercise will use a similar pattern with "setters" and "getters".
 */
const calculator = () => {
  let sum = 0;
  return {
    add: number => {
      sum = sum + number;
    },
    get: () => sum
  };
};

const guessingGame = numberOfRounds => {
  // @see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  const answer = Math.floor(Math.random() * (10 + 1));
  let count = 0;

  return guess => {
    count += 1;
    if (count >= numberOfRounds)
      return "No more guesses. The answer was " + answer;
    else if (guess < answer) return "You're too low!";
    else if (guess > answer) return "You're too high!";
    else if (guess === answer) return "You got it!";
  };
};

module.exports = {
  calculator,
  guessingGame
};
