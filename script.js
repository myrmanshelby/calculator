/* TO DO
- create calculator in HTML
- design with CSS
- Make the functions to populate the display
- Connect the buttons/make the calculator work
*/

let num1Input;
let num2Input;
let operatorInput;

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

// Below are the mathematical functions used by the calculator.
// They are called by the operate function to run the calculator
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
