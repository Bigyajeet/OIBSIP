
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

celsius.oninput = function() {
  let celsiusValue = parseFloat(celsius.value);

  let fahrenheitValue = (celsiusValue * 9 / 5) + 32;
  fahrenheit.value = fahrenheitValue.toFixed(2);

  let kelvinValue = celsiusValue + 273.15;
  kelvin.value = kelvinValue.toFixed(2);
};

fahrenheit.oninput = function() {
  let fahrenheitValue = parseFloat(fahrenheit.value);

  let celsiusValue = (fahrenheitValue - 32) * 5 / 9;
  celsius.value = celsiusValue.toFixed(2);

  let kelvinValue = (fahrenheitValue - 32) * 5 / 9 + 273.15;
  kelvin.value = kelvinValue.toFixed(2);
};

kelvin.oninput = function() {
  let kelvinValue = parseFloat(kelvin.value);

  let fahrenheitValue = (kelvinValue - 273.15) * 9 / 5 + 32;
  fahrenheit.value = fahrenheitValue.toFixed(2);

  let celsiusValue = kelvinValue - 273.15;
  celsius.value = celsiusValue.toFixed(2);
};
