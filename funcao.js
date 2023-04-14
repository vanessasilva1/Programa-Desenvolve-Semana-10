//DECLARAÇÃO DE FUNÇÃO

// 1 - Declarar a função
                      
function imprimirTexto(texto) {
    console.log(texto);
}

// 2 - executa a fução 1 ou + vezes

imprimirTexto('Olá');
imprimirTexto('Vanessa');

function soma() {
    return 2 + 2;
}

//só soma(); não vai. Tem q colocar no console;
console.log(soma());

imprimirTexto(soma());

//--------------------------------------------------------//

// parâmetros de função

               //1       //2
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2));

// parâmetros x argumentos

//Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Ju', 20));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(3, 5), soma(5, 3)));
console.log(multiplica(soma(5, 5)));

// Três tipos de funções

/*Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.
*/

function cumprimentar(){
    console.log('oi gente!')
}
   
cumprimentar()

/*Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string.*/

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}
   
cumprimentaPessoa('Helena');

/*Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.
*/

/*No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.*/

function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

/*Função com return e mais de um parâmetro: Lembrando que as funções podem receber a quantidade de parâmetros necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 se refere a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber - no caso, números.
*/

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}
   
operacaoMatematica(15, 30, 45) // 90

/*Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

*/