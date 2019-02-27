const expect = require("chai").expect;

const Calculator = require("../../exercises/08-classes/classes").Calculator;
const NewCalculator = require("../../exercises/08-classes/classes")
  .NewCalculator;

describe("Classes", () => {
  describe("Calculator", () => {
    it("should be a class", () => {
      const calc = new Calculator();
      expect(calc).to.be.an.instanceof(Calculator);

      const calStr = Calculator.toString();
      expect(calStr).to.contain("class Calculator");
    });
    it("should have the property total, which should start at zero", () => {
      const calc = new Calculator();
      expect(calc.total).to.be.an("number");
      expect(calc.total).to.equal(0);
    });
    it(
      "it's property total should be defined using ESNext syntax (skipping because unable to test)"
    );
    it("should set the total if passed a start value when instantiated (e.g. new Calculator(5) should set the total to 5)", () => {
      const calc = new Calculator(5);
      expect(calc.total).to.equal(5);
    });
    it("should have two methods: add and get", () => {
      const calc = new Calculator();
      expect(calc.add).to.be.a("function");
      expect(calc.get).to.be.a("function");
    });
    it("it's methods should be defined with ESNext syntax", () => {
      const calc = new Calculator();
      expect(calc).to.be.an.instanceof(Calculator); // To avoid giving false positive if using function instead of class

      const addStr = calc.add.toString();
      expect(addStr).to.contain("=>");

      const getStr = calc.get.toString();
      expect(getStr).to.contain("=>");
    });
    it("it's method add should add a value to the total", () => {
      const calc = new Calculator();
      calc.add(10);
      calc.add(5);
      expect(calc.total).to.equal(15);
    });
    it("it's method get should return the value of the total", () => {
      const calc = new Calculator();
      expect(calc.get()).to.equal(0);
      calc.add(10);
      calc.add(5);
      expect(calc.get()).to.equal(15);
    });
  });

  describe("NewCalculator", () => {
    it("should be a class that extends Calculator", () => {
      const calc = new NewCalculator();
      expect(calc).to.be.an.instanceof(NewCalculator);

      const decrementorStr = NewCalculator.toString();
      expect(decrementorStr).to.contain("class NewCalculator");
      expect(decrementorStr).to.contain("extends Calculator");
    });
    it("should inherit the methods add and get from Calculator", () => {
      const calc = new NewCalculator();
      expect(calc.add).to.be.a("function");
      expect(calc.get).to.be.a("function");
    });
    it("should have a method called subtract", () => {
      const calc = new NewCalculator();
      expect(calc.subtract).to.be.a("function");
    });
    it("it's method subtract should be defined with ESNext syntax", () => {
      const calc = new NewCalculator();
      expect(calc).to.be.an.instanceof(NewCalculator); // To avoid giving false positive if using function instead of class

      const subtractStr = calc.subtract.toString();
      expect(subtractStr).to.contain("=>");
    });
    it("it's method subtract should subtract a value from the total", () => {
      const calc = new NewCalculator(10);
      calc.subtract(10);
      calc.subtract(5);
      expect(calc.total).to.equal(-5);
    });
  });
});
