/*classe é uma definição de algo
uma grande vantagem de utilizar classes é para não precisar reescrever código, pois é possível instânciar várias vezes, apenas atribuindo as informações necessárias. */

class Pessoa {
    nome;
    idade;
    //O constructor define o que será obrigatório que seja passado o parâmetro
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //forma de criar método na classe
    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

/*instância é uma ocorrência dessa classe sendo invocada conforme abaixo
forma de instânciar sem constructor
    const karol = new Pessoa();
    karol.nome = "Karol Salvador";
    karol.idade = 33;
    karol.altura = 1.59;
*/

//instanciando com constructor
//const karol = new Pessoa ("Karol", 33);

//usando funções

function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);

    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);

    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);

    }
}

const karol = new Pessoa("Karol", 33);
const maycon = new Pessoa("Maycon", 38);

compararIdade(karol, maycon);


