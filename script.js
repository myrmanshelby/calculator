/* TO DO
- Make the functions to populate the display
- Connect the buttons/make the calculator work
*/

/* Notes on rounding:
The max length of a number with a decimal is 15 digits
The max length of a number without a decimal is 16 digits
*/

let num1Input = "";
let num2Input = "";
let operatorInput = "";

// BUG: DOESN'T ALLOW USER TO INPUT MULTIPLE DIGIT NUMBERS
// BUG: 8 * 9 = / in upper display because of operatorBtns event listener
//    solution: need to create a function to populate the upper display, which either adds content or
//    replaces based on existence of num1Input, num2Input, and operatorInput
//    then replace this with what's in numberBtns and operatorBtns

const upperDisplay = document.querySelector(".upper-display");

// Makes number buttons work

const numberBtns = document.querySelectorAll(".numbers");
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    populateLowerDisplay(button.id[1]);

    if (num1Input === "") {
      num1Input = parseFloat(button.id[1]);
      upperDisplay.textContent = num1Input;
    } else {
      num2Input = parseFloat(button.id[1]);
      upperDisplay.textContent += " " + num2Input;
    }
  });
});

// Makes operator buttons work
const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (operatorInput === "") {
      operatorInput = button.id;
      upperDisplay.textContent += " " + getOperatorString(button.id);
    } else {
      num1Input = operate(operatorInput, num1Input, num2Input);
      num2Input = "";
      operatorInput = button.id;
      upperDisplay.textContent =
        num1Input + " " + getOperatorString(operatorInput);
      populateLowerDisplay(num1Input);
    }
  });
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () => {
  num1Input = operate(operatorInput, num1Input, num2Input);
  num2Input = "";
  operatorInput = "";

  upperDisplay.textContent += " =";
  populateLowerDisplay(num1Input);
});

// Functions to populate the display

function populateLowerDisplay(outputNumber) {
  const lowerDisplay = document.querySelector(".lower-display");
  lowerDisplay.textContent = outputNumber;
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
