 /*  DESAFIO MÓDULO 1

        Crie um programa para calcular o valor de uma viagem
        Você terá 3 variáveis, sendo elas:
        1- Preço do Combustível
        2- Gasto médio de combustível do carro por KM
        3- Distância em KM da viagem 
        
        Imprima no console o valor que será gasto para realizar esta viagem
*/ 

let precoCombustivel = 6;
let consumo = 10;
let distancia = 400;

console.log( ((distancia/consumo) * precoCombustivel).toFixed(2) ); //toFixed serve para informar quantas casas após a virgula serão