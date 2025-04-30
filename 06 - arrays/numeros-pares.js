/*
    2 - Crie um programa que seja capaz e percorrer uma lista de números e imprima cada número par encontrado.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(let i = 0; i < numeros.length; i++) {
    //cria variável para armazenar os elementos do array
    const numero = numeros[i];

    //verifica se o número é par, vendo se o resto da divisão dele por 2 é = a 0, sendo par imprime o número
    if(numero % 2 === 0) {
        console.log(numero);

    }
}