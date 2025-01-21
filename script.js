// Select the result display and all buttons
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

// Initialize variables to store inputs and operations
let currentInput = '';
let previousInput = '';
let operator = '';

// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            // Handle the calculation when "=" is pressed
            if (operator === '/' && currentInput === '0') {
                // Prevent division by zero
                result.value = 'Error';
                currentInput = '';
                previousInput = '';
                operator = '';
            } else if (previousInput && operator) {
                // Perform the calculation
                try {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    result.value = currentInput;
                    previousInput = '';
                    operator = '';
                } catch (error) {
                    result.value = 'Error';
                    currentInput = '';
                }
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Handle operator buttons
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            // Handle number and decimal input
            currentInput += value;
            result.value = currentInput;
        }
    });
});
