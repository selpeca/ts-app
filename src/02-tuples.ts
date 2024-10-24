const prices:(number|string)[] = [1,2,3,'ss']
prices.push(1)
prices.push('1')
// Para definir el orden de los elementos del array
let user:[string,number,boolean] = ['sergio',15,true]

// Destructurar una tupla
const [username,age] = user
console.log(username);
console.log(age);
