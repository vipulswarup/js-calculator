//Global calculation
var globalCalculation = 0;
var lastClicked = 0;

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
      changeDisplay(lastClicked);
    });
}
init();
