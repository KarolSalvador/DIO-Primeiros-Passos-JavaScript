/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1- Preço do combustível;
    2- Gasto médio de combustível do carro por KM;
    3- Distância em KM da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

let precoCombustivel = 5.97;
let consumoCarro = 10;
let distanciaEmKm = 370;

let litrosConsumidos = distanciaEmKm / consumoCarro
let valorViagem = precoCombustivel * litrosConsumidos;

console.log("O valor para fazer uma viagem de " + distanciaEmKm + "KM, é de: R$" + valorViagem.toFixed(2)); //toFixed faz com que retorne apenas 2 digitos após a vírgula