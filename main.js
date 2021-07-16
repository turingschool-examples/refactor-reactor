function calculateTip(total, percentage) {
  var tipAmount = total * (percentage / 100);
  return tipAmount;
};

function checkGreeting(greeting){
  if (greeting === undefined) {
    return "See ya!";
  } else {
    return "Hello!";
  }
};

function  checkDogNamesForGreg(names ){
  var containsGreg = false;
  for (i =0 ; i  <names.length ; i++ ) {
  if (names[ i ] === "Greg") {
  containsGreg = true;
  }
    }
    return containsGreg;
};

function checkDogNamesForGary(names){
  var containsGreg=false;
  for(i=0;i<names.length;i++){
    if(names[i]==="Gary"){
      containsGreg=true;
    }
  }return containsGreg;
};



module.exports = {
  calculateTip,
  checkGreeting,
  checkDogNamesForGreg,
  checkDogNamesForGary
};
