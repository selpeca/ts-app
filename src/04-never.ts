/*
El tipo de dato never,
más que todo sirve para
tipar a una función
que nunca va a finalizar
o sencillamente que pueda
terminar el programa en el
caso de   llanar una excepción
*/
const withoutEnd = () =>{
  while (true) {
    console.log("Nunca pares de aprender");
  }
}

const fail = (message : string) => {
  throw new Error(message)
}

const example = (input:unknown) => {
  if (typeof input === 'string') {
    return 'Es un string'
  } else if (Array.isArray(input)){
    return 'Es un array'
  }
  return fail('no match')
}

console.log(example('sergio'));
console.log(example([1,2,3,4,5]));
console.log(example(11)); // Se detiene el programa
console.log(example('otro texto'));
