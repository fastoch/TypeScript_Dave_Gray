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
const student = {
    name: 'Douglas',
    GPA: 10,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// just an alternate version of the previous code
Object.keys(student).map(key => {
    console.log(`${key}: ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student, 'GPA');
logStudentKey(student, 'classes');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
