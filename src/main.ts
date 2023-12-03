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

interface Student {
  // [index: string]: number | string | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[] // optional property
}

const student: Student = {
  name: 'Douglas',
  GPA: 10,
  classes: [100, 200]
}

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// just an alternate version of the previous code
Object.keys(student).map(key => {
  console.log(`${key}: ${student[key as keyof Student]}`)
})

