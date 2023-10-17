class Coder {
  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, 
    protected lang: string = 'TypeScript'
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge() {
    return `Hello, I'm ${this.age}.`
  }
}

const Dave = new Coder('Dave', 'Rock', 42, 'Python')
console.log(Dave.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string, 
    name: string, 
    music: string, 
    age: number,
  ) {
    super(name, music, age)
    this.computer = computer
  }

  public getLang() {
    return `I write ${this.lang}`
  }
}

const fastoch = new WebDev('Arch Linux', 'Fabrice', 'AC/DC', 41)
console.log((fastoch.computer));
console.log(fastoch.getLang());

///////////////////////////////////////

interface Musician {
  name: string,
  instrument: string,         
  play(action: string): string  // method
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(
    name: string,
    instrument: string
  ) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}.`
  }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));

/////////////////////////////////////

class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count  // we pre-increment so that first id is 1
  }
}

const John = new Peeps('John')
const David = new Peeps('David')
const Laura = new Peeps('Laura')

console.log(Peeps.count); // 3

/////////////////////////////

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    // we check if value is an array and if it only contains strings
    if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
      this.dataState = value
    } else throw new Error('Parameter is not an array of strings')
  } 
}

const MyBands = new Bands()
MyBands.data = ['Blink 182', 'Meshuggah', 'Placebo', 'Muse']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'] // adding one band
console.log(MyBands.data);