class Bands {
	private dataState: string[]

	constructor() {
		this.dataState = []
	}
	
	public get data(): string[] {
		return this.dataState
	}

	public set data(value: string[]){
		if (Array.isArray(value) &&
			value.every(elt => typeof elt === 'string')) 
		{
			this.dataState = value
		}
		else throw new Error('Param is not an array of strings')
	}
}

const myBands = new Bands()
myBands.data = ['Johnny', 'Jeanne Mas', 'Mogwaï']
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Top'] // using spread operator
console.log(myBands.data) 
