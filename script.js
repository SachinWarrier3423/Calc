const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            if (operator === '/' && currentInput === '0') {
                result.value = 'Error';
                currentInput = '';
                previousInput = '';
                operator = '';
            } else if (previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                result.value = currentInput;
                previousInput = '';
                operator = '';
            }
        }
        
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
            result.value = currentInput;
        }
    });
});
