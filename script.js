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

/*
Getting function and display values to work

PSEUDOCODE

for each number button
add event listener that populates the display 
and saves the number as the display number

*/

// Makes number buttons work

const numberBtns = document.querySelectorAll(".numbers");
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    //update upper display
    populateLowerDisplay(button.id[1]);

    if (num1Input == "") {
      num1Input = parseFloat(button.id[1]);
    } else {
      num2Input = parseFloat(button.id[1]);
    }
  });
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
