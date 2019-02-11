const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));
const {
  createAnArray,
  accessingAnArray,
  highestNumber,
  isPalindrome,
  createDogObject,
  createStudentObject,
  returnObjectProperties,
  combineArray,
  accessObject,
  combineObject,
  removeDuplicates
} = require("../../exercises/02-data-structures/data-structures.js");

describe("Data structures", () => {
  it("should return an array with three values", () => {
    const newArr = createAnArray();
    expect(newArr.length).to.equal(3);
  });
  it("it should return a BMW", () => {
    const car = accessingAnArray();
    expect(car).to.equal("BMW");
  });
  it("it should return the highest number in the array", () => {
    const number1 = highestNumber([1, 2, 3, 4, 10, -1]);
    expect(number1).to.equal(10);
    const number2 = highestNumber([0, 0, 0, 1]);
    expect(number2).to.equal(1);
  });
  it("it should merge both arrays", () => {
    const combinedArray = combineArray(["HTML"], ["CSS"]);
    expect(combinedArray).to.be.equalTo(["HTML", "CSS"]);
  });
  it("should return true or false if the word is a palidrome", () => {
    const eyeResult = isPalindrome("eye");
    const notAPalindrome = isPalindrome("not a palindrome");
    const nope = isPalindrome("nope");

    expect(eyeResult).to.be.equal(true);
    expect(notAPalindrome).to.be.equal(false);
    expect(nope).be.equal(false);
  });
  it("it should return a object", () => {
    const dog = createDogObject();
    expect(dog).to.be.an("object");
    expect(dog).to.have.all.keys("name", "legs", "tails", "owners");
    expect(dog.owners).to.be.an("array");
  });
  it("it should return ballcap", () => {
    const obj = accessObject();
    expect(obj).to.equal("ballcap");
  });
  it("it should return an object that contains an array that has three values", () => {
    const student = createStudentObject();
    expect(student.firstname).to.be.a("string").to.be.ok;
    expect(student.lastname).to.be.a("string").to.be.ok;
    expect(student.skills.length).to.equal(3);
  });
  it("it should return all object properties", () => {
    const objectProperties = returnObjectProperties();
    expect(objectProperties.length).to.equal(4);
  });
  it("it should combine two objects and return a single object", () => {
    const obj1 = {
      firstName: "Clark"
    };
    const obj2 = {
      lastName: "Kent"
    };
    const combinedObj = combineObject(obj1, obj2);
    expect(combinedObj).to.deep.equal({
      firstName: "Clark",
      lastName: "Kent"
    });
  });
  it("should remove all duplicate values", () => {
    const unique = removeDuplicates([
      2,
      3,
      4,
      4,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      5,
      32,
      3,
      4,
      5
    ]);
    expect(unique).to.be.equalTo([2, 3, 4, 5, 6, 7, 32]);
  });
});
