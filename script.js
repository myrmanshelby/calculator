let num1Input = "";
let num2Input = "";
let operatorInput = "";
let result = "";
let enteringNum1 = true;
let decimalOn = false;

// Makes number buttons work
const numberBtns = document.querySelectorAll(".numbers");
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (enteringNum1) {
      num1Input += button.id[1];
      populateUpperDisplay();
      populateLowerDisplay(num1Input);
    } else {
      num2Input += button.id[1];
      populateUpperDisplay();
      populateLowerDisplay(num2Input);
    }
  });
});

const decimalBtn = document.getElementById("decimal");
decimalBtn.addEventListener("click", () => {
  if (!decimalOn) {
    if (enteringNum1) {
      num1Input += ".";
      populateUpperDisplay();
      populateLowerDisplay(num1Input);
    } else {
      num2Input += ".";
      populateUpperDisplay();
      populateLowerDisplay(num2Input);
    }
    decimalOn = true;
  }
});

// Makes operator buttons work
const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1Input === "") {
      num1Input = result;
    } else if (operatorInput === "" || num2Input === "") {
      operatorInput = button.id;
      enteringNum1 = false;
    } else {
      num1Input = operate(operatorInput, num1Input, num2Input);
      num2Input = "";
      operatorInput = button.id;
      populateLowerDisplay(num1Input);
      enteringNum1 = false;
    }

    decimalOn = false;
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
  upperDisplay.textContent = roundLongNumber(result);
  enteringNum1 = true;
  decimalOn = false;
  populateLowerDisplay(result);
});

// TOP BUTTONS
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  result = "";
  num1Input = "";
  num2Input = "";
  operatorInput = "";
  enteringNum1 = true;
  decimalOn = false;
  populateLowerDisplay("");
  populateUpperDisplay();
});

const plusMinusBtn = document.getElementById("plus-minus");
plusMinusBtn.addEventListener("click", () => {
  if (num2Input === "" && num1Input === "" && !(result === "")) {
    result *= -1;
    const upperDisplay = document.querySelector(".upper-display");
    upperDisplay.textContent = result;
    populateLowerDisplay(result);
  } else if (num2Input === "" && !(num1Input === "")) {
    num1Input *= -1;
    populateLowerDisplay(num1Input);
    populateUpperDisplay();
  } else if (!(num2Input === "")) {
    num2Input *= -1;
    populateLowerDisplay(num2Input);
    populateUpperDisplay();
  }
});

const percent = document.getElementById("percent");
percent.addEventListener("click", () => {
  if (num2Input === "" && num1Input === "" && !(result === "")) {
    result *= 0.01;
    const upperDisplay = document.querySelector(".upper-display");
    upperDisplay.textContent = result;
    populateLowerDisplay(result);
  } else if (num2Input === "" && !(num1Input === "")) {
    num1Input *= 0.01;
    populateLowerDisplay(num1Input);
    populateUpperDisplay();
  } else if (!(num2Input === "")) {
    num2Input *= 0.01;
    populateLowerDisplay(num2Input);
    populateUpperDisplay();
  }
  decimalOn = true;
});

// Functions to populate the display

function populateLowerDisplay(outputNumber) {
  const lowerDisplay = document.querySelector(".lower-display");
  lowerDisplay.textContent = roundLongNumber(outputNumber);
}

function populateUpperDisplay() {
  const upperDisplay = document.querySelector(".upper-display");
  if (num1Input === "") {
    upperDisplay.textContent = "";
  } else if (operatorInput === "") {
    upperDisplay.textContent = roundLongNumber(num1Input);
  } else if (num2Input === "") {
    upperDisplay.textContent =
      roundLongNumber(num1Input) + " " + getOperatorString(operatorInput);
  } else {
    upperDisplay.textContent =
      roundLongNumber(num1Input) +
      " " +
      getOperatorString(operatorInput) +
      " " +
      roundLongNumber(num2Input);
  }
}

// Below are the mathematical functions used by the calculator.
// They are called by the operate function to run the calculator
function roundLongNumber(a) {
  if (a.toString().length > 15) {
    return parseFloat(a).toExponential(3);
  } else {
    return a;
  }
}

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
