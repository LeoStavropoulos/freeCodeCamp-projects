import { telephoneCheck } from "./telephone-number-validator.js";

const input = document.querySelector('.user-input');
const output = document.querySelector('.output');
const clear = document.querySelector('.btn-clear');

input.addEventListener('keyup', (e) =>{
    if (output.classList.length === 2 ) output.classList.remove(output.classList[1]);

    output.innerHTML = telephoneCheck(e.target.value) ? "YES" : "NO";
    output.classList.add(telephoneCheck(e.target.value) ? "positive" : "negative");

    if (e.target.value === '') clearOutput();
})

clear.addEventListener('click', () => {
    input.value = '';
    clearOutput();
})

function clearOutput() {
    output.innerHTML = '';
    output.className = 'output';
}