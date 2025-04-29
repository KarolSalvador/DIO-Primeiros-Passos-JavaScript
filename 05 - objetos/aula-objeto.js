//Objeto é uma coleção de dados (agrupa valores), para criar um objeto deve-se criar uma variável e atribuir os valores dentro de chaves

const pessoa = {
    nome: "Karol Salvador",
    idade: 33,

    //um método pode ser criado dentro de um objeto para que seja invocado junto com o mesmo
    descrever: function () {
        //o uso do this serve de contexto para que ele assuma o objeto e possa trazer a informação
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

//Ao chamar o objeto passando a função ele trará as informações.
pessoa.descrever();

//Para resgatar apensa uma das informações do objeto pode-se usar o nome do objeto + . e informação desejada
//console.log(karol.nome);


//para incrementar um objeto deve-se chamar o objeto e adicionar após o . o que deseja adicionar
pessoa.altura = 1.59;

//para invocar o Objeto pode-se apenas utilizar seu nome
//console.log(karol);


