const calculatorScreen = document.getElementById("calculator-screen");
const clearButton = document.getElementById("clear-btn");
const equalsButton = document.getElementById("equals-btn");
const dotButton = document.getElementById("dot-btn");
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");

let firstNum = "";
let secondNum = "";
let currentOperator = null;
let shouldResetScreen = false;

equalsButton.addEventListener("click", calculate)
clearButton.addEventListener("click", clearScreen)
dotButton.addEventListener("click", appendDot)

//Sets text content to 0 to remove bug on inital load of page.
calculatorScreen.textContent = "0";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent))
})

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => operatorInput(button.textContent))
})

function appendNumber(number) {
  if (calculatorScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  calculatorScreen.textContent += number;
  console.log(calculatorScreen.textContent);
}

function resetScreen() {
  calculatorScreen.textContent = "";
  shouldResetScreen = false;
}

function clearScreen() {
  calculatorScreen.textContent = "0";
  firstNum = "";
  secondNum = "";
  currentOperator = null;
}

function appendDot() {
  if (shouldResetScreen) resetScreen();
  if (calculatorScreen.textContent === "")
    calculatorScreen.textContent = "0"
  if (calculatorScreen.textContent.includes(".")) return;
  calculatorScreen.textContent += ".";
}

function operatorInput(operator) {
  if (currentOperator !== null) calculate();
  firstNum = calculatorScreen.textContent;
  currentOperator = operator;
  shouldResetScreen = true;
}

function calculate() {
  if (currentOperator === null || shouldResetScreen) return;
  if (currentOperator === "÷" && calculatorScreen.textContent === "0") {
    alert("You can't divide by 0 silly!");
    return;
  }
  secondNum = calculatorScreen.textContent;
  calculatorScreen.textContent = roundResult(
    operate(currentOperator, firstNum, secondNum)
  )
  currentOperator = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
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
        case "×":
            return multiply(x, y)
        case "÷":
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

