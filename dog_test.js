const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { Dog, Cute, Trained } = require("./dog.js");

describe("tests run on the 'dog.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "dog_test.js");
  });
  // functional tests
  it("verifies that the cost of a dog is $50", () => {
    wish((new Dog()).displayPrice() === "The dog costs $50.");
  });
  it("verifies that the cost of a cute dog is $70", () => {
    wish(Cute(new Dog()).displayPrice() === "The dog costs $70.");
  });
  it("verifies that the cost of a trained cute dog is $130", () => {
    wish(Trained(Cute(new Dog())).displayPrice() === "The dog costs $130.");
  });
});
