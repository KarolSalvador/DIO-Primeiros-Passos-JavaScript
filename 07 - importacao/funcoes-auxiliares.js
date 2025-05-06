
const entradas = [5, 50, 10, 98, 23];
let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;

}

function print(texto) {
    console.log(texto);

}

//usa-se para exportar funções dentro do arquivo para serem reaproveitadas em outros
module.exports = { gets, print };