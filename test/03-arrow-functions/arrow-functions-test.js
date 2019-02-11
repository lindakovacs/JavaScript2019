const chai = require("chai");
chai.use(require("chai-arrays"));
const expect = chai.expect;

const {
  before,
  after
} = require("../../exercises/03-arrow-functions/arrow-functions");

describe("Arrow Functions", () => {
  describe("multiply", () => {
    it("should be an arrow function", () => {
      expect(before.multiply).to.not.be.ok;
      const funcStr = after.multiply.toString();
      expect(funcStr).to.include("=>");
    });
    it("should still multiply two numbers together", () => {
      const product = after.multiply(10, 5);
      expect(product).to.equal(50);
    });
  });
  describe("doubleNumbers", () => {
    it("should be an arrow function", () => {
      expect(before.doubleNumbers).to.not.be.ok;
      const funcStr = after.doubleNumbers.toString();
      expect(funcStr).to.include("=>");
    });
    it("should still double the numbers in an array", () => {
      const product = after.doubleNumbers([1, 3, 5]);
      expect(product).equalTo([2, 6, 10]);
    });
  });
  describe("wait", () => {
    it("should have exactly two arrow functions: 1. wait itself 2. the anonymous function inside setTimeout()", () => {
      expect(before.wait).to.not.be.ok;
      const funcStr = after.wait.toString();
      expect(funcStr).to.include("=>");
      const matches = funcStr.match(/=>/g);
      expect(matches).to.have.lengthOf(2);
    });
    it("should still set isFinished to true after 10 milliseconds", done => {
      after.wait();
      setTimeout(() => {
        expect(after.getIsFinished()).to.be.true;
        done();
      }, 100);
    });
  });
});
