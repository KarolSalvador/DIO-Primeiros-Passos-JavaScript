//Estruturas de repetição permitem executar um bloco de código várias vezes, enquanto uma condição for verdadeira.
//São úteis para automatizar tarefas repetitivas, como percorrer arrays ou contar números.

const notas = [];
notas.push(5);
notas.push(7);
notas.push(9);
notas.push(8);
notas.push(6);

let soma = 0;

//Esse for percorre todas as posições do array notas, pegando uma nota por vez.
//Em cada repetição, ele adiciona o valor da nota à variável soma, acumulando o total.
for(let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(notas)
console.log(media.toFixed(1));