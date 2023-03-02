// km , litri ,button , strong

var km = document.querySelector("#km");
var litri = document.querySelector("#liter");
var btn = document.querySelector("#calculateBtn");
var consumFinal = document.querySelector("#FinalConsumption");

btn.addEventListener("click", function () {
  // 80L => 1500km
  // X?L =>100km
  if (litri.value === "" || km.value === "") {
    alert("Complete all the fields before the calculation");
  }

  var result = (100 * litri.value) / km.value;

  consumFinal.innerHTML = result.toFixed(1);
  consumFinal.style.color = "red";
});
