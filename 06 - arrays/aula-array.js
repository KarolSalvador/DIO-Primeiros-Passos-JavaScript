/*Um array é uma estrutura de dados que armazena uma coleção de elementos em uma única variável, organizados por índice.
Ele permite acessar, modificar e percorrer os valores usando suas posições numéricas (começando do zero).*/

//sua declaração é como uma variável recebendo os dados entre colchetes, podendo também iniciar vazia
const alunos = ["Karol", "Maycon", "Maria"];

//para imprimir/acessar todos os elementos do array pode-se usar o nome do array. 
//console.log(alunos);
// para uma posição especifica o nome do array + a posição desejada entre colchetes [x]
//console.log(alunos[0]);

//para adicionar elementos ao final da lista usa-se
alunos.push("Karla");
console.log(alunos);

//ou pode-se adicionar diretamente indicando a posição ou substituir determinado elemento
alunos[4] = "Carlos";
console.log(alunos);