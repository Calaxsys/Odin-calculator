const calculatorScreen = document.getElementById("calculator-screen");
const clearButton = document.getElementById("clear-btn");
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");

function clearScreen() {
  clearButton.addEventListener("click", () => {
    calculatorScreen.textContent = "";
  })
}

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

