/*
    1 - Crie uma classe para representar um carro
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que, dado a quantidade de KM's e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {
    
    marca;
    nome;
    cor;
    consumo;

    constructor(marca, nome, cor, consumo){
        this.marca = marca;
        this.nome = nome;
        this.cor = cor;
        this.consumo = consumo;
    }

    calculoLitros(distancia, preco){
        return distancia * this.consumo * preco;   
    }
}

const vectra = new Carro('Chevrolet', 'Vectra', 'Branco', 1/10);

console.log(`O ${vectra.marca} ${vectra.nome} de cor ${vectra.cor} fará uma viagem que irá custar ${vectra.calculoLitros(400, 6)}`);