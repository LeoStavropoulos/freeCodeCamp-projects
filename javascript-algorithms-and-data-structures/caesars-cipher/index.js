import { rot13 } from "./caesars-cipher.js";

const input = document.querySelector('.user-input');
const output = document.querySelector('.output');
const clear = document.querySelector('.btn-clear');

input.addEventListener('keyup', (e) =>{

    const val = e.target.value;

    output.classList.remove('hidden');
    
    if (val === '') clearOutput();

    output.innerHTML = rot13(val);

})

clear.addEventListener('click', () => {
    input.value = '';
    clearOutput();
})

function clearOutput() {
    output.innerHTML = '';
    output.className = 'output hidden';
}