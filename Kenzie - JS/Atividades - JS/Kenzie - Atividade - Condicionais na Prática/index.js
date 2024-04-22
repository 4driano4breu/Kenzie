/*Faça um algoritmo declarando as variáveis A, B, C iniciando-as com os respectivos valores 10, 20 e 30, e imprima na tela se a soma de A + B é menor que C.*/

var A = 10
var B = 20
var C = 30
var resultado = (A + B) < C
console.log(resultado)

/*Faça um algoritmo declarando uma variável com um valor numérico qualquer e informe na tela se esse numero é par ou ímpar.*/

var num = 15
if((num % 2) == 0){
    var verificacao = "PAR"
}
else{
    var verificacao = "IMPAR"
}
console.log(num + " é um número: " + verificacao)

/*Declare duas variáveis que armazenam valores boleanos(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.*/

var sou_humano = true
var sou_alienigena = false

console.log(sou_humano || sou_alienigena)
console.log(sou_humano && sou_alienigena)

/*Declare três variáveis que armazenam valores numéricos inteiros e diferentes e mostre-os em ordem decrescente.*/

var A = 3 /*3 2 1 2 1*/
var B = 2 /*1 3 3 1 2*/
var C = 1 /*2 1 2 3 3*/

if(A >= B && B >= C){
    console.log("A > B > C")
    console.log(A + " " + B + " " + C)
}
else if(A >= C && C >= B){
    console.log("A > C > B")
    console.log(A + " " + C + " " + B)
}
else if(B >= A && A >= C){
    console.log("B > A > C")
    console.log(B + " " + A + " " + C)
}
else if(B >= C && C >= A){
    console.log("B > C > A")
    console.log(B + " " + A + " " + C)
}
else if(C >= A && A >= B){
    console.log("C > A > B")
    console.log(C + " " + A + " " + B)
}
else if(C >= B && B >= A){
    console.log("C > B > A")
    console.log(C + " " + B + " " + A)
}

/*Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.*/

let num1 = 5
let num2 = 6

if(num1>num2){
    alert(num1 + " é maior que " + num2)
}else{
    alert(num2 + " é maior que " + num1)
}