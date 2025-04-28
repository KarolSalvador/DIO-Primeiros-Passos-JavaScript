/*
A criação da função é feita com a palavra reservada function + nome da função(parametros da função). pode ou não ter parâmetros. A função é utilizada para poder executar um bloco de código sem precisar repetir todo o trecho e/ou calcular diferentes parâmetros 
*/

function incrementarJuros(valor, percentualJuros) { //com base no desafio de valor pago no produto
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo; //return é usado para que ela entregue o resultado da equação feita

}

/*chamando a função e passando os valores desejados conseguirmos fazer a conta sem precisar escrever toda a equação para descobrir o valor, pois a função substitui através dos parâmetros passados.*/

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
