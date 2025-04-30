/* 
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais.
*/

class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor (marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }
    

    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoPorKm * precoCombustivel;
    }

}

const sw4 = new Carro("Newland", "Prata", 1/8);
console.log(sw4.calcularGastoPercurso(75, 5.99));