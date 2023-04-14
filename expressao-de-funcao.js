//declaração de função

function minhaFuncao(parametro) {
    //bloco de código
}

minhaFuncao('param');

//expressão de função

const soma = function(num1, num2) { return num1 + num2 }

console.log(soma(1, 1));

//diferença principal - HOISTING
// funções e var são 'listadas' no topo do arquivo.


console.log(apresentar());

function apresentar() {
    return 'Olá';
}

//console.log(soma2()); erro, pq não inicializei. É como se fosse o caso mesmo da variável. 
const soma2 = function(num1, num2) { return num1 + num2 }
