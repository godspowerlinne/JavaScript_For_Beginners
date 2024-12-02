// 1. Initialize variables 
const displayResult = document.getElementById('displayResult');
const displayValue = document.getElementById('displayValue');
const validationText = document.getElementById('validationText');
const firstInput = document.getElementById('firstInput');
const lastInput = document.getElementById('lastInput'); 

// 2. Event listeners for buttons

// division button onclick event 
const divide = () => {
    if (!firstInput.value ||!lastInput.value) {
        validationText.textContent = 'Both fields are required.';
    }
    else {
        validationText.textContent = '';
        displayResult.value = parseFloat(firstInput.value) / parseFloat(lastInput.value);
    }
    displayValue.value = `${firstInput.value} /  ${lastInput.value}`;
 
}

// multiplication button onclick event
const multiply = () => {
    if (!firstInput.value ||!lastInput.value) {
        validationText.textContent = 'Both fields are required.';
    }
    else {
        validationText.textContent = '';
        displayResult.value = parseFloat(firstInput.value) * parseFloat(lastInput.value);
    }
    displayValue.value = `${firstInput.value} *  ${lastInput.value}`;
}

// addition button onclick event
const add = () => {
    if (!firstInput.value ||!lastInput.value) {
        validationText.textContent = 'Both fields are required.';
    }
    else {
        validationText.textContent = '';
        displayResult.value = parseFloat(firstInput.value) + parseFloat(lastInput.value);
    }
    displayValue.value = `${firstInput.value} +  ${lastInput.value}`;
}

// subtraction button onclick event
const subtract = () => {
    if (!firstInput.value ||!lastInput.value) {
        validationText.textContent = 'Both fields are required.';
    }
    else {
        validationText.textContent = '';
        displayResult.value = parseFloat(firstInput.value) - parseFloat(lastInput.value);
    }
    displayValue.value = `${firstInput.value} -  ${lastInput.value}`;

}

// 3. Event listeners for input fields

// First input event listener
firstInput.addEventListener('input', () => {

    if (!(parseFloat(firstInput.value) || firstInput.value === '')){
        validationText.textContent = 'Input must be a number.';
    }
    else {
        validationText.textContent = '';
    }
})

// Last input event listener
lastInput.addEventListener('input', () => {

    if (!(parseFloat(firstInput.value) || firstInput.value === '')){
        validationText.textContent = 'Input must be a number.';
    }
    else {
        validationText.textContent = '';
    }
})

// 4. Onclick event for clear button 
const clearDisplay = () => {
    displayResult.value = '';
    displayValue.value = '';
    validationText.textContent = '';
    firstInput.value = '';
    lastInput.value = '';
}
