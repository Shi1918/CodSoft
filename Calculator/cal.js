let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    if (previousOperator) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.textContent);
    display.textContent += operator;
}

function clearDisplay() {
    display.textContent = '';
    previousOperator = null;
    previousOperand = null;
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
    let currentOperand = parseFloat(display.textContent.slice(display.textContent.lastIndexOf(previousOperator) + 1));
    let result;

    switch (previousOperator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            if (currentOperand === 0) {
                result = 'Error';
            } else {
                result = previousOperand / currentOperand;
            }
            break;
    }

    display.textContent = result;
    previousOperator = null;
    previousOperand = null;
}