const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
  const tempInput = document.getElementById('temp');
  const unitSelect = document.getElementById('unit');
  const temperature = parseFloat(tempInput.value);

  if (isNaN(temperature)) {
    resultDiv.textContent = 'Please enter a valid temperature';
    return;
  }

  const fromUnit = unitSelect.value;
  let toUnit, convertedTemp;

  if (fromUnit === 'Celsius') {
    convertedTemp = (temperature * 9/5) + 32;
    toUnit = 'Fahrenheit';
  } else if (fromUnit === 'Fahrenheit') {
    convertedTemp = (temperature - 32) * 5/9;
    toUnit = 'Celsius';
  } else if (fromUnit === 'Kelvin') {
    convertedTemp = temperature - 273.15;
    toUnit = 'Celsius';
  }

  resultDiv.textContent = `${temperature} ${fromUnit} is ${convertedTemp.toFixed(2)} ${toUnit}`;
});
