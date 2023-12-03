// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

// index signature
interface TransactionObj {
  [index: string]: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransactions.Pizza); // -10
console.log(todaysTransactions['Pizza']); // -10

// Dynamically accessing the data 
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todaysNet(todaysTransactions)); // 35


