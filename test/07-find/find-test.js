const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));
const { find, findUser } = require("../../exercises/07-find/find");

describe("find", () => {
  it("tests find to see if it returns a single value", () => {
    let idx = 0;
    const originalArray = [4, 18, 50, 33];
    const divisibleByTen = find(originalArray, (number, index, array) => {
      expect(index).to.equal(idx);
      expect(array).to.be.equalTo(originalArray);
      idx += 1;
      return number % 10 === 0;
    });
    expect(divisibleByTen).to.equal(50);
  });
  it("should return the user object with the matching id", () => {
    const users = [
      {
        id: 1024,
        username: "smile134",
        email: "smile134@example.com"
      },
      {
        id: 1025,
        username: "newyorkfarmer",
        email: "johndoe@example.com"
      },
      {
        id: 1026,
        username: "redsocksfan#1",
        email: "massusa@example.com"
      }
    ];
    const user = findUser(users, 1025);
    expect(user).to.deep.equal({
      id: 1025,
      username: "newyorkfarmer",
      email: "johndoe@example.com"
    });
  });
});
