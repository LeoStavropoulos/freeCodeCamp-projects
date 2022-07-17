import { convertToRoman } from "./roman-numeral-converter.js";

const input = document.querySelector('.user-input');
const output = document.querySelector('.output');
const clear = document.querySelector('.btn-clear');

input.addEventListener('keyup', (e) =>{

    const val = e.target.value;

    output.classList.remove('hidden');
    if (val === '') clearOutput();

    if (isNAN(val)) {
        output.innerHTML = 'Invalid input!';
        return;
    }
    
    if (isOffLimits(val)) {
        output.innerHTML = 'Input out of bounds!';
        return;
    }

    output.innerHTML = convertToRoman(val);

})

clear.addEventListener('click', () => {
    input.value = '';
    clearOutput();
})

function clearOutput() {
    output.innerHTML = '';
    output.className = 'output hidden';
}

function isNAN(input) {
    return !parseInt(input)
}

function isOffLimits(input) {
    const num = parseInt(input)
    return (num < 0 || num > 3_999_999 ) ? true : false;
}