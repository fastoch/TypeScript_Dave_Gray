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

