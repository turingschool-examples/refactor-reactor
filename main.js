function calculateTip(total, percentage) {
  var tipAmount = total * (percentage / 100);
  return tipAmount;
};

module.exports = {
  calculateTip
};
