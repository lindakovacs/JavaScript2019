/**
 * You will need to have your *package.json* setup and mocha and chai
 * dependencies installed for this to work. (We will do this in class).
 *
 * Before running this test (for this exercise only), you must be in the same
 * folder as this file. If you do not know, type `pwd`. You should see
 * `path/to/JavaScript2019/exercises/09-unit-testing/`. If you only see
 * `path/to/JavaScript2019/` type:
 * ```bash
 * cd exercises/09-unit-testing/
 * ```
 * To run this test:
 * ```bash
 * npm run test ./unit-testing-test.js
 * ```
 */

/**
 * I'm importing the *expect* library from chai.
 * This is kinda of like including JavaScipt libraries
 * with <script></script> tags.
 */
const { expect } = require("chai");

/**
 * Each file has it's own scope. I can't access something from another
 * file unless I import it, because it is out of scope.
 * Including the functions from *exercises/08-unit-testing/unit-testing.js*
 * so that I can test.
 */
const { add, subtract, isEvenNumber, findAdults } = require("./unit-testing"); // relative pathway to unit-testing.js file

describe("Unit Testing", () => {
  // If using VScode debugger, change `describe` to `describe.only`

  // Example
  describe("add", () => {
    it("should add two numbers", () => {
      const sum = add(2, 3);
      expect(sum).to.equal(5);
    });
  });

  /**
   * Write a unit test for `subtract` here.
   */
  describe("subtract", () => {
    it("should subtract two numbers", () => {
      const diff = subtract(5, 3);
      expect(diff).to.equal(2);
    });
  });


  /**
   * Write two tests for `isEvenNumber` here.
   * Use a a different assertion than `.equal()`
   * @see https://www.chaijs.com/api/bdd/
   */

  describe("isEvenNumber", () => {
    it("should return true if number is even", () => {
      //const check = isEvenNumber(4 % 2 === 0);
      const check = isEvenNumber(4);
      expect(check).to.be.true;
    });
    it("should return false if number is odd", () => {
      //const check = isEvenNumber(5 % 2 === 0);
      const check = isEvenNumber(5);
      expect(check).to.be.false;
    });
  });


  describe("findAdults", () => {
    // Remove the `.skip` when you are ready to write this test
    //it.skip("will find, in a multidimensional array, all the people older than 18", () => {
    it("will find, in a multidimensional array, all the people older than 18", () => {
      /**
       * Complete the unit test for findAdults here.
       * Hint: Arrays are passed by reference, so you will need to call on a test that deeply compares values.
       * @see https://www.chaijs.com/api/bdd/
       */
      const people = [
        { name: "Janet", age: 43 },
        { name: "Aiden", age: 10 },
        { name: "Chloe", age: 16 }
      ];
      //expect(findAdults(people)).to.deep.equal([{ name: "Janet", age: 43 }]).to.equal.true;
      expect(findAdults(people)).to.deep.equal([{ name: "Janet", age: 43 }]);
    });

    // Remove the `.skip` when you are ready to write this test
    //it.skip("will return an empty array if no adults are found", () => {
    it("will return an empty array if no adults are found", () => {
      /**
       * Complete the unit test for findAdults here, where you use a different assertion than `.equal()`
       * @see https://www.chaijs.com/api/bdd/
       */
      const people = [
        { name: "Liam", age: 3 },
        { name: "Emma", age: 17 },
        { name: "Ethan", age: 8 }
      ];
      // expect(findAdults(people)).to.deep.equal.false;
      expect(findAdults(people)).to.be.an('array').that.is.empty;
    });
  });
});
