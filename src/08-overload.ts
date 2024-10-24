// Sobrecarga de funciones
// Sergio => [S,E,R,G,I,O] => strign => strign[]
// [S,E,R,G,I,O] => Sergio => strign[] => strign
// NO SE PUEDE HACER SOBRE FUNCIONES FLECHA ()=>{}
function parseStr(input: string|string[]):string|string[] {
  if (Array.isArray(input)) {
    return input.join(''); // String
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Sergio')
console.log("rtaArray",rtaArray);
const rtaString = parseStr(['S','e','r','g','i','o'])
console.log("rtaString",rtaString);
