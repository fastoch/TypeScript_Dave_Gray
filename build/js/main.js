"use strict";
<<<<<<< HEAD
// convert to a more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'random';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b; // The empty string coerces data type to string
};
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'add');
const img = document.getElementById('img');
=======
// type is inferred
let myName = 'fastoch';
// type is explicit
let myAge = 41;
// we can also specify the variable type and assign the value afterwards
let friend;
friend = 'Billy';
const sum = (a, b) => {
    return a + b;
};
let album;
let regex = /\w+/g;
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('fastoch'); // adds an item at the end 
guitars.unshift(1616); // adds an item at the beginning
console.log(stringArr);
console.log(guitars);
let myTuple = ['Dave', 12, false];
let myObj;
myObj = [];
const exampleObj = {
    prop1: 'Cool',
    prop2: true,
};
let evh = {
    name: 'Eddie Van Halen',
    active: false,
    albums: [1982, 'Thriller']
};
const greetGuitarist = (guitarist) => {
    return `Ladies & gentlemen, please welcome ${guitarist.name}!`;
};
// call the function and log the output to the console
console.log(greetGuitarist(evh));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
>>>>>>> 9c589f470161c9f371f4aaa5c7a717479cb48be1
