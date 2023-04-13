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

// PARA SABER MAIS
//STRING

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.


///NUMBER

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado1 = false;
console.log(Number(usuarioConectado1)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.

/*Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.
*/