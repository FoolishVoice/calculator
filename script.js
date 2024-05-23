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
}); 

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


equal.addEventListener("click", () => {
    const text = equal.innerHTML;
    if (text == "=") {
        dsply.textContent = '';
        if (operator == "+") {
            dsply.textContent += add(Number(firstNumber), Number(secondNumber));
            operator = '';
            secondNumber = '';
            return firstNumber = Number(dsply.textContent);
        } else if (operator == "-") {
            dsply.textContent += subtract(Number(firstNumber), Number(secondNumber));
            operator = '';
            secondNumber = '';
            return firstNumber = Number(dsply.textContent);
    }  else if (operator == "*") {
        dsply.textContent += multiply(Number(firstNumber), Number(secondNumber));
        operator = '';
        secondNumber = '';
        return firstNumber = Number(dsply.textContent);
    } else if (operator == "/") {
        dsply.textContent += divide(Number(firstNumber), Number(secondNumber));
        operator = '';
        secondNumber = '';
        return firstNumber = Number(dsply.textContent);
}
    }
});
