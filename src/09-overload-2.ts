//Ange => [A,n,g,e] => string => string[]
//[A,n,g,e] => Ange => string[] => string

// Sobrecarga de funciones solo sirve con function, es decir que no se
//puede cuando hagamos funciones con const

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else {
    return input.split(''); //string
  }
}

const rtaArray = parseStr('Ange');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('Ange =>', rtaArray);

const rtaString = parseStr(['A', 'n', 'g', 'e']);
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}
console.log("'A', 'n', 'g', 'e'=>", rtaString);
