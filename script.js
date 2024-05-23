const calculatorScreen = document.getElementById("calculator-screen");
const clearButton = document.getElementById("clear-btn");
const equalsButton = document.getElementById("equals-btn");
const dotButton = document.getElementById("dot-btn");
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");


clearButton.addEventListener("click", clearScreen);
numberButtons.forEach(button => {
  button.addEventListener("click", () => appendNumber(button.textContent))
})


function clearScreen() {
  calculatorScreen.textContent = "0";
}

function appendNumber(number) {
  if (calculatorScreen.textContent === "0") {
    calculatorScreen.textContent = number;
  } else {
    calculatorScreen.textContent += number;
  }
}

//Operate function to calculate equation
let x;
let operator;
let y;

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case "+":
            return add(x, y)
        case "-":
            return subtract(x, y)
        case "*":
            return multiply(x, y)
        case "/":
            return division(x, y)
    }   
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

