type One = string
type Two = string | number
type Three = 'hello'

// convert to a more or less specific type
let a: One = 'hello'  
let b = a as Two      // less specific
let c = a as Three    // more specific

let d = <One>'world'
let e = <string | number>'random'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return '' + a + b   // The empty string coerces data type to string
}

let myVal: string = addOrConcat(2,2,'concat') as string
let nextVal: number = addOrConcat(2,2,'add') as number

const img = document.getElementById('img') as HTMLImageElement
