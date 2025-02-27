
const pessoa = {
    nome: 'Cesar Vinicius',
    idade: 20,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();