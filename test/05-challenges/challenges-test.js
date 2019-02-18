const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const {
  diffArray,
  getIndexToIns
} = require("../../exercises/05-challenges/challenges");

describe("getIndexToIns", () => {
  it("getIndexToIns([50, 10, 20, 30, 40], 35) should return 3", () => {
    const index = getIndexToIns([10, 20, 30, 40, 50], 35);
    expect(index).to.equal(3);
  });
  it("getIndexToIns([5, 3, 20, 3], 5) should return 2", () => {
    const index = getIndexToIns([5, 3, 20, 3], 5);
    expect(index).to.equal(2);
  });
  it("getIndexToIns([40, 60], 80) should return 2", () => {
    const index = getIndexToIns([40, 60], 80);
    expect(index).to.equal(2);
  });
  it("getIndexToIns([40, 60], 10) should return 0", () => {
    const index = getIndexToIns([40, 60], 10);
    expect(index).to.equal(0);
  });
});

describe("arr-diff", () => {
  it('should return ["pink wool"]', () => {
    const result = diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    );
    expect(result).to.have.members(["pink wool"]);
  });
  it("it should return [4]", () => {
    const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(result).to.have.members([4]);
  });
  it("it should return an item of six items", () => {
    const result = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
    expect(result).to.have.members([1, 3, 7, "calf", "piglet", "filly"]);
  });
  it("it should return an array of three items", () => {
    const result = diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
    expect(result).to.have.members(["snuffleupagus", "cookie monster", "elmo"]);
  });
});
