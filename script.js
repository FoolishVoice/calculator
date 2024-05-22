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


let firstNumber = '';
let secondNumber = '';
let operator = '';


function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

const btnNumbers = document.querySelectorAll(".number");
const btnSymbol = document.querySelectorAll(".symbol");
let dsply = document.querySelector(".display");
const equal = document.querySelector(".equal");

dsply.textContent = '';

let firstSet = true;

btnNumbers.forEach(function(element) {
    element.addEventListener("click", () => {
    const text = element.innerHTML;
    const number = Number(text);
    if (typeof number == "number" && firstSet == true) {
        dsply.textContent += text;
        return firstNumber += text;
    } else if (typeof number == "number" && firstSet == false) {
        dsply.textContent += text;
        return secondNumber += text;
    }
    });
});    // trying to figure out how to make includes work to filter out symbols from numbers from onclick

btnSymbol.forEach(function(element) {
    element.addEventListener("click", () => {
        const text = element.innerHTML;
        if (text == "+") {
            dsply.textContent += text;
            operator += text;
            firstSet = false;
        }  else if (text == + "-") {
            dsply.textContent += text;
            operator += text;
            firstSet = false;
        }  else if (text == "*") {
            dsply.textContent += text;
            operator += text;
            firstSet = false;
        }  else if (text == "/") {
            dsply.textContent += text;
            operator += text;
            firstSet = false;
        }
    });
});

equal.forEach(function(element) {
    element.addEventListener("click", () => {
        // put code for equal button
    });
});