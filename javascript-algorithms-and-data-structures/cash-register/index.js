import { checkCashRegister } from "./cash-register.js";

const priceInput = document.querySelector('#price');
const cashInput = document.querySelector('#cash');
const cidInputs = document.querySelectorAll('.input-register');
const statusOutput = document.querySelector('#status');
const changeOutput = document.querySelector('#change');

let price, cash;
let cid = new Map([
    ["PENNY", 0], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
]);

priceInput.addEventListener('change', (e) => {
    hideOutputs();
    price = e.target.value;
    showOutput();
})

cashInput.addEventListener('change', (e) => {
    hideOutputs();
    cash = e.target.value;
    showOutput();
})

cidInputs.forEach((input) => {
    input.addEventListener('change', (e) => {
        const name = e.target.name;
        const val = e.target.value;
        hideOutputs();
        cid.set(name, val);
        showOutput();
    })
})

statusOutput.innerHTML = checkCashRegister().status;

function showOutput() {
    const cidArray = mapToArr(cid);
    const res = checkCashRegister(price, cash, cidArray);

    statusOutput.innerHTML = res.status;
    changeOutput.innerHTML = createChangeOutput(res.change);

    statusOutput.classList.remove('hidden');
    if (res.change.length !== 0) changeOutput.classList.remove('hidden');
}

function createChangeOutput(change) {
    let out = '';

    change.forEach(item => {
        if(item[1]) out += `<li>${item[0]}:\t${item[1]}</li>`;
    })

    return out
}

function hideOutputs() {
    statusOutput.className = "output hidden";
    changeOutput.className = "output hidden";
}

function mapToArr(map) {
    let arr = []
    map.forEach((val, key) => {
        arr.push([key , parseFloat(val)])
    })
    return arr;
}

