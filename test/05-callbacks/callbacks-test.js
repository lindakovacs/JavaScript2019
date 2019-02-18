const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const { printNames } = require("../../exercises/05-callbacks/callbacks");

describe("Callbacks", () => {
  it("the callback is called for each item in the array", () => {
    const callback = sinon.spy();
    printNames(["test", "test1", "test3"], callback);
    expect(callback.calledThrice).to.equal(true);
  });
});
