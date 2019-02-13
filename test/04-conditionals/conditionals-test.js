const { expect } = require("chai");
const {
  updateProduct
} = require("../../exercises/04-conditionals/conditionals");

describe("Conditionals", () => {
  describe("updateProduct", () => {
    it("should have a switch statement replacing an if statement", () => {
      const funcStr = updateProduct.toString();

      expect(funcStr).to.include("switch");

      const matches = funcStr.match(/case/g);
      expect(matches).to.have.lengthOf.at.least(4);

      expect(funcStr).to.include("default");
    });
    it("should be solved using the spread operator for each case statement (5 times in total, including default)", () => {
      const funcStr = updateProduct.toString();

      const matches = funcStr.match(/\.\.\.product/g);
      expect(matches).to.have.lengthOf.at.least(5);
    });
    it('should add the action payload to the product\'s cost when the type is "ADD"', () => {
      const product = {
        name: "toothbrush",
        cost: 1.99
      };
      const action = {
        type: "ADD",
        payload: 1.0
      };
      const newProduct = updateProduct(product, action);
      expect(newProduct).to.deep.equal({
        name: "toothbrush",
        cost: 2.99
      });
    });
    it('should subtract the action payload from the product\'s cost when the type is "SUBTACT"', () => {
      const product = {
        name: "shampoo",
        cost: 8.99
      };
      const action = {
        type: "SUBTRACT",
        payload: 2.0
      };
      const newProduct = updateProduct(product, action);
      expect(newProduct).to.deep.equal({
        name: "shampoo",
        cost: 6.99
      });
    });
    it('should multiply the action payload by the product\'s cost when the type is "MULTIPLY"', () => {
      const product = {
        name: "toothbrush",
        cost: 1.5
      };
      const action = {
        type: "MULTIPLY",
        payload: 2
      };
      const newProduct = updateProduct(product, action);
      expect(newProduct).to.deep.equal({
        name: "toothbrush",
        cost: 3.0
      });
    });
    it('should divide the action payload from the product\'s cost when the type is "DIVIDE"', () => {
      const product = {
        name: "shampoo",
        cost: 10.0
      };
      const action = {
        type: "DIVIDE",
        payload: 2
      };
      const newProduct = updateProduct(product, action);
      expect(newProduct).to.deep.equal({
        name: "shampoo",
        cost: 5.0
      });
    });
  });
});
