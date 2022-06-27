const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const Dog = require("./dog.js");

describe("tests run on the 'dog.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "dog_test.js");
  });
  // functional tests
  console.log(Dog);
});
