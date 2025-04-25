/* 
Faça um programa para calcular o valor de uma viagem

Você terá 5 variável. Sendo elas:
    1- preço etanol;
    2- preço gasolina;
    3- o tipo de combustível que está no seu carro;
    4- gasto médio de combustível do carro por KM.
    5- distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem. 
*/

let precoEtanol = 5.32;
let precoGasolina = 6.44;
let consumoCarro = 12;
let distanciaKm = 500;
let tipoCombustivel = "gasolina";

let litrosConsumidos = distanciaKm / consumoCarro;

if (tipoCombustivel === "etanol") {
    let valorViagem = precoEtanol * litrosConsumidos;
    console.log("O valor para fazer uma viagem de " + distanciaKm + "KM, é de: R$" + valorViagem.toFixed(2));

} else if (tipoCombustivel === "gasolina") {
    let valorViagem = precoGasolina * litrosConsumidos;
    console.log("O valor para fazer uma viagem de " + distanciaKm + "KM, é de: R$" + valorViagem.toFixed(2));
}