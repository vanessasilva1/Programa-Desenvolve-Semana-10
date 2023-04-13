/*var forma = 'retângulo';
var altura = 4;
var comprimento = 2;

area = altura * comprimento;
console.log(area); // 8 mesmo não tendo declarado.*/

const forma = 'retângulo';
const altura = 4;
const comprimento = 2;
//const area; // erro. Const tem que ser sempre inicializado. Além disso, esse valor vai mudar, então é recomendado usar let.
let area;

if(forma === 'retângulo') {
    area = altura * comprimento;
    console.log(area);
} else {
    console.log('FIM');
}

