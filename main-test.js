var assert = require("chai").assert;

var {
  calculateTip,
  checkGreeting,
  checkDogNamesForGreg,
  checkDogNamesForGary
} = require("./main.js");

describe("Refactor Reactor", function(){
  it("calculates the tip amount", function(){
    var tip = calculateTip(100, 20);

    assert.equal(tip, 20);
  });

  it("answers back depending on the greeting", function(){
    var answerWhenGreeted = checkGreeting("Hi!");

    assert.equal(answerWhenGreeted, "Hello!");

    var answerWhenNotGreeted = checkGreeting();

    assert.equal(answerWhenNotGreeted, "See ya!");
  });

  it("checks for dogs names", function(){
    var dogsWithGreg = ["Fido", "Sally", "Spot", "Greg", "Lola"];

    var hasGreg = checkDogNamesForGreg(dogsWithGreg);

    assert.equal(hasGreg, true);

    var dogsWithoutGreg = ["Fido", "Sally"];

    var hasNoGreg = checkDogNamesForGreg(dogsWithoutGreg);

    assert.equal(hasNoGreg, false);
  });

  it("checks for dogs names", function(){
    var dogsWithGary = ["Fido", "Sally", "Spot", "Gary", "Lola"];

    var hasGary = checkDogNamesForGary(dogsWithGary);

    assert.equal(hasGary, true);

    var dogsWithoutGary = ["Fido", "Sally"];

    var hasNoGary = checkDogNamesForGary(dogsWithoutGary);

    assert.equal(hasNoGary, false);
  });
});
