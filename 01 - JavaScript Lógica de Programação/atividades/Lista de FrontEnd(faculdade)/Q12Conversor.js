const celsius = 30;
const conversor = function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(`${celsius}°C é igual a ${conversor(celsius)}°F`);
