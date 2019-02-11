const { expect } = require("chai");

const { calculator } = require("../../exercises/04-closures/closures");

describe("Closures", () => {
  describe("calculator", () => {
    it("should return an object with two functions", () => {
      const calcObj = calculator();
      expect(calcObj).to.be.an("object");

      const methods = Object.values(calcObj);
      expect(methods).to.have.lengthOf(2);

      expect(methods[0]).to.be.a("function");
      expect(methods[1]).to.be.a("function");
    });
    it('the second method ("getter") should return the value of sum. ("sum" needs to be "falsy" at first for this to pass).', () => {
      const calcObj = calculator();
      const methods = Object.values(calcObj);
      const sum = methods[1]();
      expect(sum).to.not.be.ok;
    });
    it('the first method ("setter") should set the value of sum', () => {
      const calcObj = calculator();
      const methods = Object.values(calcObj);
      const [add, get] = methods;

      add(5);
      const sum1 = get();
      expect(sum1).to.equal(5);

      add(13);
      const sum2 = get();
      expect(sum2).to.equal(18);

      add(0);
      const sum3 = get();
      expect(sum3).to.equal(18);

      add(-20);
      const sum4 = get();
      expect(sum4).to.equal(-2);
    });
  });
});
