/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e dua classificação conforme tabela abaixo:

Média - (nota 1 + nota 2 + nota 3) / 3;

Classificação:
    - Média menor que 5: reprovação;
    - Média entre 5 e 7: recuperação;
    - Média acima de 7: passou de semestre;
*/

const nota1 = 9;
const nota2 = 9;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Sua média foi: " + media.toFixed(1) + ". Você está REPROVADO");

} else if ( media >= 5 && media <= 7) {
    console.log("Sua média foi: " + media.toFixed(1) + ". Você está de RECUPERAÇÃO");

} else {
    console.log("Sua média foi: " + media.toFixed(1) + ". Parabéns, você está APROVADO!");
}