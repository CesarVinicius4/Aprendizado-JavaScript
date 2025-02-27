// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const numeros = [];

incluirNumeros(16);
imprimirPares();

function incluirNumeros(valor){
    for (let i = 0; i <= valor; i++) {
        numeros.push(i);
    }
}

function imprimirPares(){
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0){
            console.log(numeros[i]);
        }
    }
}