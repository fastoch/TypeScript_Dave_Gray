const stringEcho = (arg: string): string => arg

// same function that works with any type, not only the string type
const echo = <T>(arg: T): T => arg

const isObject = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

const toto = "toto"
const titi = 123
const tutu = ["bibi", "bobo"]
const tyty = null
const tata = {
  animal: "dog",
  age: 16
}

console.log(isObject(toto)); // false
console.log(isObject(titi)); // false
console.log(isObject(tutu)); // false
console.log(isObject(tyty)); // false
console.log(isObject(tata)); // true
