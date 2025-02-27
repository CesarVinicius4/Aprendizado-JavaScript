// O que é um array?
// É representado por [] no java script, diferente do {} dentro de uma variável, que seria um objeto literal
// O primeiro item de um array é sempre representado por 0

const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan'); // .push serve para adicionar algum item no array

alunos[4] = 'Vinicius'; // desta maneira também podemos adiconar algum item no array, de forma direta e definindo sua posição, caso tenha algum item na posição definida ele é substituido

console.log(alunos[4]);

alunos.pop(4); // serve para retirar algum item do array, quando a posição não é referenciada () ele tira o ultimo item.
alunos.shift(); // também serve para retirar algum item do array, mas quando a posição não é referenciada ele retira o primeiro.

console.log(alunos[4]);
