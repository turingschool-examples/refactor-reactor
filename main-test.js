var assert = require("chai").assert;

var {
  calculateTip,
  checkGreeting
} = require("./main.js");

describe("Refactor Reactor", function(){
  it("calculates the tip amount", function(){
    var tip = calculateTip(100, 20);

    assert.equal(tip, 20);
  });

  it("Answers back depending on the greeting", function(){
    var answerWhenGreeted = checkGreeting("Hi!");

    assert.equal(answerWhenGreeted, "Hello!");

    var answerWhenNotGreeted = checkGreeting();

    assert.equal(answerWhenNotGreeted, "See ya!");
  });
});
