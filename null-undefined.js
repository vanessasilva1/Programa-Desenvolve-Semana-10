let input = null;

if (input === null) {
    console.log('não há informação');
} else {
    console.log(input);
}

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

/*No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.*/