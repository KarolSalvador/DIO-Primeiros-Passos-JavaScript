/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atrivutos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70Kg e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return ("Você está abaixo do peso recomendado.");
        
        } else if (imc >= 18.5 && imc < 25) {
            return ("Você está dentro do peso recomendado.");
        
        } else if (imc >= 25 && imc < 30) {
            return ("Você está acima do peso recomendado.");
        
        } else if (imc >= 30 && imc < 40) {
            return ("Você está Obeso.");
        
        } else {
            return ("Você está com Obesidade Grave.");
        }
    }

    exibirImc() {
        console.log(`O IMC de ${this.nome} é ${this.calcularImc().toFixed(2)}. ${this.classificarImc()}`);
    
    }
}



const jose = new Pessoa("Jose", 1.75, 70);
jose.exibirImc();

const karol = new Pessoa("Karol", 1.59, 70);
karol.exibirImc();