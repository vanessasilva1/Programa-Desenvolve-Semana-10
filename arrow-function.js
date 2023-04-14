function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

//arrow function
//instruções de 1 linha, por isso ñ preciso do return. Se eu tiver mais de uma linha, aí sim vou precisar das chaves e do return
                        //param   //retorno
const apresentarArrow = nome => `Meu nome é ${nome}`; 
            // 2 param
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow('Vanessa'));
console.log(soma(2, 3));

//arrow function com + 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num1 >= 10 || num2 >= 10) {
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(1, 10));

// arrow function é + curto, mas se for muito confuso pode usar a declaração mesmo.
// Pode colocar qualquer um dos 3;

//Hoisting: arrow function se comporta com expressão.