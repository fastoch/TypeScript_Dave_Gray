"use strict";
// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10
// Dynamically accessing the data 
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions)); // 35
