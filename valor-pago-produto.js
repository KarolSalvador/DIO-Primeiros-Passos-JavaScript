/*
3) Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
1 - À vista Débito: recebe 10% de desconto;
2 - À vista no dinheiro ou PIX: recebe 15% de desconto;
3 - Em duas vezes: preço normal de etiqueta sem juros;
4 - Acima de duas vezes: preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaPagamento = 5;

if (formaPagamento < 1 || formaPagamento > 4) {
    console.log("Erro: Código de forma de pagamento inválido. Digite um número entre 1 e 4.");
    
} else if (formaPagamento === 1) {
    console.log("O valor a ser pago é de: R$" + (precoEtiqueta - (precoEtiqueta * 0.1)));

}else if (formaPagamento === 2) {
    console.log("O valor a ser pago é de: R$" + (precoEtiqueta - (precoEtiqueta * 0.15)));

} else if (formaPagamento === 3) {
    console.log("O valor a ser pago é de: R$" + precoEtiqueta);

} else {
    console.log("O valor a ser pago é de: R$" + (precoEtiqueta + (precoEtiqueta * 0.1)));

}