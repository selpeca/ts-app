// Sobrecarga de funciones
// Sergio => [S,E,R,G,I,O] => strign => strign[]
// [S,E,R,G,I,O] => Sergio => strign[] => strign
// NO SE PUEDE HACER SOBRE FUNCIONES FLECHA ()=>{}

export function parseStr(input: string): string[]
export function parseStr(input: string[]): string

export function parseStr(input: unknown):unknown {
  if (Array.isArray(input)) {
    return input.join(''); // String
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Sergio')
rtaArray.reverse()
console.log("rtaArray",rtaArray);

const rtaString = parseStr(['S','e','r','g','i','o'])
rtaString.toLocaleLowerCase()
console.log("rtaString",rtaString);
