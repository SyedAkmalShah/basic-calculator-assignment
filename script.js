// Variables to store the operands and operator
let operand1 = '';
let operand2 = '';
let operator = '';

// Function to update the screen
function updateScreen(value) {
    document.getElementById('screen').innerText = value;
}

// Function to clear all
function clearAll() {
    operand1 = '';
    operand2 = '';
    operator = '';
    updateScreen('0');
}

// Function to handle number inputs
function num(value) {
    if (operator === '') {
        operand1 += value.toString();
        updateScreen(operand1);
    } else {
        operand2 += value.toString();
        updateScreen(operand2);
    }
}

// Function to handle operator inputs
function setOperator(value) {
    if (operator !== '') {
        calculate();
    }
    operator = value;
}

// Function to calculate the result
function calculate() {
    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === 'x') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    updateScreen(result);
    operand1 = result.toString();
    operand2 = '';
    operator = '';
}
