interface TransactionObj {
  Pizza: number,
  Books: number,
  Job: number
}

const todayTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todayTransactions.Pizza); // -10
