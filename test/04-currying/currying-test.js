const { expect } = require("chai");

const {
  multiplier,
  guessingGame
} = require("../../exercises/04-currying/currying");

describe("Currying", () => {
  describe("multiplier", () => {
    it("should multiply at once if passed two numbers as agruments", () => {
      const result = multiplier(3, 4);
      expect(result).be.equal(12);
    });
    it("should return a function if only passed once argument", () => {
      const result = multiplier(3);
      expect(result).to.be.a("function");
    });
    it("should multiply the two numbers if passed in a parameters in a separate set of parentheses (e.g. multiplier(3)(4))", () => {
      const result = multiplier(3)(4);
      expect(result).be.equal(12);
    });
  });
  describe("guessingGame", () => {
    it("should return a function", () => {
      const round = guessingGame(3);
      expect(round).to.be.a("function");
    });
    it('should return "You\'re too low!" if your guess is too low', () => {
      const round = guessingGame(5);
      const feedback = round(-Infinity);
      expect(feedback).to.equal("You're too low!");
    });
    it('should return "You\'re too high!" if your guess is too high', () => {
      const round = guessingGame(5);
      const feedback = round(Infinity);
      expect(feedback).to.equal("You're too high!");
    });
    it(
      'should return "You got it!" if your guess is the same as the random number. (Skipping because we cannot test this).'
    );
    it('should return "No more guesses the answer was x", where x is the answer, if you guess more than what is allowed', () => {
      const round = guessingGame(1);
      round(-Infinity);
      const feedback = round(Infinity);
      expect(feedback).to.include("No more guesses. The answer was ");
    });
    it("should have an answer that is an integer", () => {
      const round = guessingGame(1);
      round(-Infinity);
      const feedback = round(Infinity);
      const isFloat = feedback.match(/\d(?=\.\d)/);
      expect(isFloat).to.be.null;
    });
  });
});
