function calculateTip(total, percentage) {
  var tipAmount = total * (percentage / 100);
  return tipAmount;
};

function checkGreeting(greeting){
  if (greeting === undefined) {
    return "See ya!"
  } else {
    return "Hello!"
  }
};

module.exports = {
  calculateTip,
  checkGreeting
};
