const sumCid = (sum, value) => sum + value[1];
const sumCaixa = (sum, value) => 
  sum + (typeof value == 'number' ? value : 0);

function checkCashRegister(price, cash, cid) {

  let change = [];
  let troco = (cash - price) * 100;  
  let caixa = cid.map(e => [e[0], Math.round(e[1] * 100)]).flatMap(e => e);

  const table = [
    ['PENNY', 1],
    ['NICKEL', 5],
    ['DIME', 10],
    ['QUARTER', 25],
    ['ONE', 100],
    ['FIVE', 500],
    ['TEN', 1000],
    ['TWENTY', 2000],
    ['ONE HUNDRED', 10000]
  ];   

  if (cid.reduce(sumCid, 0) * 100 >= troco) {
    for (let i = table.length - 1; i >= 0; i--) {
        const current = caixa.indexOf(table[i][0])      
        let cont = 0;   
        while (troco >= table[i][1] && caixa[current + 1]) {
          troco -= table[i][1];        
          caixa[current + 1] -= table[i][1];
          cont++;
        }                  
        change.push([table[i][0], (cont * table[i][1]) / 100])
    }    
    if (troco == 0) {
      if (caixa.reduce(sumCaixa, 0) == 0) {
        change.reverse();
        return { status: 'CLOSED', change }
      }
      else {
        return { status: 'OPEN', change: change.filter(e => e[1] != 0)}
      }
    }   
  }    

  return { status: 'INSUFFICIENT_FUNDS', change: [] };
  
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));