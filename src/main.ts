class Coder {
  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, 
    protected lang: string
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

const Dave = new Coder('Dave', 'Rock', 42, 'TypeScript')
console.log(Dave.getAge());
