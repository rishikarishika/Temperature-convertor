
const inputTemperature = document.getElementById("temperature");
const inputUnit = document.getElementById("select");
const outputUnit = document.getElementById("output");

function convertCelsiusToFahrenheit(temperature) {
  return (temperature * 9/5) + 32;
}

function convertCelsiusToKelvin(temperature) {
  return temperature + 273.15;
}

function convertFahrenheitToCelsius(temperature) {
  return (temperature - 32) * 5/9;
}

function convertFahrenheitToKelvin(temperature) {
  return (temperature + 459.67) * 5/9;
}


function convertKelvinToCelsius(temperature) {
  return temperature - 273.15;
}

function convertKelvinToFahrenheit(temperature) {
  return (temperature * 9/5) - 459.67;
}


inputTemperature.addEventListener("input", function() {

  const temperature = parseFloat(inputTemperature.value);
  const unit = inputUnit.value;
  
  let celsius = 0;
  switch (unit) {
    case "celsius":
      celsius = temperature;
      break;
    case "fahrenheit":
      celsius = convertFahrenheitToCelsius(temperature);
      break;
    case "kelvin":
      celsius = convertKelvinToCelsius(temperature);
      break;
  }
  
  const fahrenheit = convertCelsiusToFahrenheit(celsius);
  const kelvin = convertCelsiusToKelvin(celsius);
  
  outputUnit.innerText = "Celsius: " + celsius.toFixed(2) + "\nFahrenheit: " + fahrenheit.toFixed(2) + "\nKelvin: " + kelvin.toFixed(2);
});
