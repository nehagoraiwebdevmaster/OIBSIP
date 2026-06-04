function convertTemperature() {

  const temp = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  const resultBox = document.getElementById("result");
  const formulaBox = document.getElementById("formula");

  if (isNaN(temp)) {
    resultBox.innerHTML = "❌ Please enter a valid number";
    formulaBox.innerHTML = "";
    return;
  }

  let celsius;
  let formula = "";

  // Convert to Celsius first
  switch (fromUnit) {

    case "celsius":
      celsius = temp;
      break;

    case "fahrenheit":
      celsius = (temp - 32) * 5 / 9;
      break;

    case "kelvin":
      celsius = temp - 273.15;
      break;

    case "rankine":
      celsius = (temp - 491.67) * 5 / 9;
      break;
  }

  let result;

  // Convert Celsius to target unit
  switch (toUnit) {

    case "celsius":
      result = celsius;
      formula = "°C = Original Celsius Value";
      break;

    case "fahrenheit":
      result = (celsius * 9 / 5) + 32;
      formula = "°F = (°C × 9/5) + 32";
      break;

    case "kelvin":
      result = celsius + 273.15;
      formula = "K = °C + 273.15";
      break;

    case "rankine":
      result = (celsius + 273.15) * 9 / 5;
      formula = "°R = (°C + 273.15) × 9/5";
      break;
  }

  resultBox.innerHTML =
    `✨ Converted Temperature: ${result.toFixed(2)}`;

  formulaBox.innerHTML =
    `📖 Formula: <br><strong>${formula}</strong>`;
}