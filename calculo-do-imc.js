/*
2) O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição e peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição e acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: peso normal;
- Entre 25 e 30: acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave.
*/

let peso = 70;
const altura = 1.59;

let imc = peso / (altura * altura);
//DICA: quando precisa fazer algo vezes essa mesma coisa pode-se usar o Math.pow(variavel,quantidade de vezes deseja elevar) Exemplo: Math.pow(altura,2)

if (imc < 18.5) {
    console.log("Seu IMC é: " + imc.toFixed(1) + ". Você está abaixo do peso recomendado.");

} else if (imc >= 18.5 && imc < 25) {
    console.log("Seu IMC é: " + imc.toFixed(1) + ". Você está dentro do peso recomendado.");

} else if (imc >= 25 && imc < 30) {
    console.log("Seu IMC é: " + imc.toFixed(1) + ". Você está acima do peso recomendado.");

} else if (imc >= 30 && imc < 40) {
    console.log("Seu IMC é: " + imc.toFixed(1) + ". Você está Obeso.");

} else {
    console.log("Seu IMC é: " + imc.toFixed(1) + ". Você está com Obesidade Grave.");
}