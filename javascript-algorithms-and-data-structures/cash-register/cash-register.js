export function checkCashRegister(price, cash, cid) {
    let change;
    let status;
    let registerSum = 0;

    if(cash < price) {
        change = [];
        status = "NOT ENOUGH CASH";
        return {status, change};
    }

    if (cash === price) {
        change = [];
        status = "OPEN";
        return {status, change};
    }

    change = amountToChange(cash - price, cid);

    if(change === null) {
        change = [];
        status = "INSUFFICIENT FUNDS";
        return {status, change};
    }
    
    for (const row of cid) {
        registerSum += row[1];
    }

    if(registerSum === cash - price) {
        status = "CLOSED";
        change = cid;
        return {status,change};
    }

    status = "OPEN";

    return {status, change};
  }


function amountToChange(amount, cid) {
    let difference;
    let billsCount;
    let change = [];
    //convert float to int
    amount *= 100;
    amount = Math.round(amount);

    let unitReference = [
        ["ONE HUNDRED", 100],  
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ]

    for (const row of unitReference) {
        billsCount = Math.floor(amount / (row[1] * 100));
        amount %= row[1] * 100;
        difference = checkDrawerChange(billsCount, row, cid);
        if(billsCount && (difference === -1)) change.push([row[0], (row[1] * (billsCount)).toFixed(2)]);
        if(difference !== -1) {
            amount += difference * 100 * row[1];
            change.push([row[0], row[1] * (billsCount - difference)])
        }
    }
    if (amount !== 0) return null;
    return change;    
}

function checkDrawerChange(amount, unit, cid) {
    let amountInRegister;
    
    for (const row of cid) {
        if(row.indexOf(unit[0]) !== -1) amountInRegister = parseFloat((row[1] / unit[1]).toFixed(2));
    }
    
    if (amountInRegister >= amount) return -1;
    return amount - amountInRegister;
}





//TEST DATA
//  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//  console.log(`{ status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }`);
//  console.log();
//  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//  console.log(`{
//     status: 'OPEN',
//     change: [
//       [ 'TWENTY', 60 ],
//       [ 'TEN', 20 ],
//       [ 'FIVE', 15 ],
//       [ 'ONE', 1 ],
//       [ 'QUARTER', 0.5 ],
//       [ 'DIME', 0.2 ],
//       [ 'PENNY', 0.04 ]
//     ]
//   }`);
//  console.log();
//  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//  console.log(`{ status: 'INSUFFICIENT_FUNDS', change: [] }`);
//  console.log();
//  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//  console.log(`{ status: 'INSUFFICIENT_FUNDS', change: [] }`);
//  console.log();
//  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//  console.log(`{
//     status: 'CLOSED',
//     change: [
//       [ 'PENNY', 0.5 ],
//       [ 'NICKEL', 0 ],
//       [ 'DIME', 0 ],
//       [ 'QUARTER', 0 ],
//       [ 'ONE', 0 ],
//       [ 'FIVE', 0 ],
//       [ 'TEN', 0 ],
//       [ 'TWENTY', 0 ],
//       [ 'ONE HUNDRED', 0 ]
//     ]
//   }`);