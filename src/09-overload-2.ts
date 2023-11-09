//Ange => [A,n,g,e] => string => string[]
//[A,n,g,e] => Ange => string[] => string

// Sobrecarga de funciones solo sirve con function, es decir que no se
//puede cuando hagamos funciones con const

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); //string
//   } else {
//     return input.split(''); //string
//   }
// }
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else if (typeof input === 'string') {
    return input.split(''); //string
  } else if (typeof input === 'number') {
    return true; //boolean
  }
}

const rtaArray = parseStr('Ange');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('Ange =>', rtaArray);

const rtaString = parseStr(['A', 'n', 'g', 'e']);
rtaString.toLowerCase();
// if (typeof rtaString === 'string') {
//   rtaString.toLowerCase();
// }
console.log("'A', 'n', 'g', 'e'=>", rtaString);

const rtaBoolean = parseStr(16);
console.log('Number =>', rtaBoolean);

