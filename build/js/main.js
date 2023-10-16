"use strict";
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
