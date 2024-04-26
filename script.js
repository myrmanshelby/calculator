/* Notes on rounding:
The max length of a number with a decimal is 15 digits
The max length of a number without a decimal is 16 digits
*/

let num1Input = "";
let num2Input = "";
let operatorInput = "";
let result = "";
let enteringNum1 = true;

// Makes number buttons work
const numberBtns = document.querySelectorAll(".numbers");
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (enteringNum1) {
      num1Input += button.id[1];
      //upperDisplay.textContent += button.id[1];
      populateUpperDisplay();
      populateLowerDisplay(num1Input);
    } else {
      num2Input += button.id[1];
      //upperDisplay.textContent += button.id[1];
      populateUpperDisplay();
      populateLowerDisplay(num2Input);
    }
  });
});

// Makes operator buttons work
const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1Input === "") {
      num1Input = result;
    }
    if (operatorInput === "") {
      operatorInput = button.id;
      //upperDisplay.textContent += " " + getOperatorString(button.id) + " ";
      enteringNum1 = false;
    } else {
      num1Input = operate(operatorInput, num1Input, num2Input);
      num2Input = "";
      operatorInput = button.id;
      //upperDisplay.textContent =
      //  num1Input + " " + getOperatorString(operatorInput) + " ";
      populateLowerDisplay(num1Input);
      enteringNum1 = false;
    }

    populateUpperDisplay();
  });
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () => {
  result = operate(operatorInput, num1Input, num2Input);
  num1Input = "";
  num2Input = "";
  operatorInput = "";
  const upperDisplay = document.querySelector(".upper-display");
  upperDisplay.textContent = result;
  enteringNum1 = true;
  populateLowerDisplay(result);
});

// Functions to populate the display

function populateLowerDisplay(outputNumber) {
  const lowerDisplay = document.querySelector(".lower-display");
  lowerDisplay.textContent = outputNumber;
}

function populateUpperDisplay() {
  const upperDisplay = document.querySelector(".upper-display");
  if (operatorInput === "") {
    upperDisplay.textContent = num1Input;
  } else if (num2Input === "") {
    upperDisplay.textContent =
      num1Input + " " + getOperatorString(operatorInput);
  } else {
    upperDisplay.textContent =
      num1Input + " " + getOperatorString(operatorInput) + " " + num2Input;
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

// Allows use of mathematical operators when equal function
// or second operator is called
function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "plus":
      return add(num1, num2);
    case "minus":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
}

function getOperatorString(operator) {
  switch (operator) {
    case "plus":
      return "+";
    case "minus":
      return "-";
    case "multiply":
      return "*";
    case "divide":
      return "/";
  }
}
