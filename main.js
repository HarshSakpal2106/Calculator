// JavaScript for calculator functionality

function appendToDisplay(value) {
  const display = document.getElementById('display');

  // Set the maximum number of digits allowed per number
  const maxDigits = 9;

  // Extract the current value of the display
  const currentValue = display.value;

  // Find the last part of the expression after the last operator
  const lastNumber = currentValue.split(/[\+\-\×\÷]/).pop();

  // Only append the value if the last number length is less than maxDigits or if it's an operator
  if (lastNumber.length < maxDigits || /[\+\-\×\÷]/.test(value)) {
    display.value += value;

    // Scroll the display to the right as new content is added
    display.scrollLeft = display.scrollWidth;
  }
}

// Function to evaluate and calculate the expression
function calculate() {
  const display = document.getElementById('display');
  try {
    // Replace the symbols to standard JavaScript operators
    let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    display.value = eval(expression); // Calculate the result
  } catch (error) {
    display.value = 'Error'; // Display error if the expression is invalid
  }
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Function to clear the display completely
function allClearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}