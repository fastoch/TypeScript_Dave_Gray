"use strict";
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
exampleObj.prop2 = false;
