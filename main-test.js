var assert = require("chai").assert;

var {
  calculateTip
} = require("./main.js");

describe("Refactor Reactor", function(){
  it("calculates the tip amount", function(){
    var tip = calculateTip(100, 20);

    assert.equal(tip, 20);
  });
});
