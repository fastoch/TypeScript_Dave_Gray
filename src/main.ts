// type is inferred
let myName = 'fastoch'

// type is explicit
let myAge: number = 41

// we can also specify the variable type and assign the value afterwards
let friend: string
friend = 'Billy'

const sum = (a: number, b: number) => {
  return a + b
}

let album: string | number

let regex = /\w+/g

let stringArr = ['one', 'hey', 'Dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('fastoch') // adds an item at the end 
guitars.unshift(1616) // adds an item at the beginning
console.log(stringArr);
console.log(guitars);



