//Global calculation
//var globalCalculation = "";
var lastClicked = 0;
var displayString = "";

function handeClick(clickValue) {
  if (isNaN(clickValue)) {
    if (clickValue == "AC") {
      //globalCalculation = "";
      displayString = "";
    } else if (clickValue == "=") {
      displayString = eval(displayString);
    } else if (clickValue == "x") {
      displayString = displayString.concat("*");
    } else if (clickValue == "+/-") {
      // do nothing
    } else {
      displayString = displayString.concat(clickValue);
    }
  } else {
    displayString = displayString.concat(clickValue);
  }
  changeDisplay(displayString);
}

function changeDisplay(numberToShow) {
  //alert(numberToShow);
  var fieldNameElement = document.getElementById("calcDisplay");
  fieldNameElement.innerHTML = numberToShow;
}
function init() {
  document
    .querySelector(".calculatorBody")
    .addEventListener("click", function(event) {
      lastClicked = `${event.target.innerText}`;
      handeClick(lastClicked);
    });
}
init();
