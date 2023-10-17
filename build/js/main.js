"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}.`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42, 'Python');
console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const fastoch = new WebDev('Arch Linux', 'Fabrice', 'AC/DC', 41);
console.log((fastoch.computer));
console.log(fastoch.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
/////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // we pre-increment so that first id is 1
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const David = new Peeps('David');
const Laura = new Peeps('Laura');
console.log(Peeps.count); // 3
/////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        // we check if value is an array and if it only contains strings
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Parameter is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Blink 182', 'Meshuggah', 'Placebo', 'Muse'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top']; // adding one band
console.log(MyBands.data);
