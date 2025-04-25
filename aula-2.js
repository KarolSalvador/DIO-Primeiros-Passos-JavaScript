//Estruturas condicionais
//variáveis do tipo boolean irão receber verdadeiro ou falso (0 ou 1).

const numero = 3;

//para saber se um número é par, tenta dividir por 2 e ver o resto da divisão. Se sobrar resto não é par.
const isNumeroDivisivelPor5 = (numero % 5) === 0; //o % é utilizado para pegar o resto da divisão

//if é uma forma de criar condicionais para direcionar o que irá acontecer de acordo com a condição
if (numero === 0) {
    console.log("Número inválido");

} else if (isNumeroDivisivelPor5) { //usado para testar uma nova condição quando a anterior no if for falsa.
    console.log("Sim");

} else { //bloco para se não entrar na condição do if cair nessa
    console.log("Não");
}

