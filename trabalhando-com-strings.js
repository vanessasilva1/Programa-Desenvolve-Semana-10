const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

/*Nós, como pessoas, conseguimos perceber o valor das variáveis cidade e input como sendo da mesma cidade, Belo Horizonte. Porém, para o JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.*/

/*Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação*/

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); //transformando todos os caracteres em letras minúsculas.

console.log(cidade2 === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

