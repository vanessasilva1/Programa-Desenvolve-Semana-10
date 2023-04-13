// tipo de dados
//booleanos

// conversão implícita
const numero = 400;
const numeroString = '400';

console.log(numero == numeroString); // compara só os valores.
console.log(numero === numeroString); // compara também os tipos.

// conversão explícita

//Number() - converter
//String() - converter 
console.log(numero + numeroString);
console.log(numero + Number(numeroString));