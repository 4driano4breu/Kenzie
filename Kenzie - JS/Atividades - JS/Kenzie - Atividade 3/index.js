/*Exercício 1
Crie um programa que concatene dois nomes e retorne uma frase de saudação.
Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"*/

let nome1 = "João"
let nome2 = "Silva"
console.log("Olá " + nome1 + " " + nome2 + "!");

/*Exercício 2
Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
Entrada: string1 = "hello", string2 = "world" Saída: "helloworld" */

let string1 = "hello";
let string2 = "world";
let string3 = string1 + string2;
console.log(string3);

/* Exercício 3
Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
Entrada: "12.5" Saída: 12 */

let valor = "12.5";
console.log(parseInt(valor))

/* Exercício 4
Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
Entrada: "12" Saída: 12 */

let valor2 = "12";
console.log(parseInt(valor2)) 
 
/* Exercício 5
Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma soma desses números e apresente o resultado
Entrada 1: "12" Entrada 2: "3" Saída: 15 */

let num1 = "12";
let num2 = "3"
num1 = parseInt(num1)
num2 = parseInt(num2)
var soma = num1 + num2;

console.log('Entrada 1: ' + parseInt(num1) + ' Entrada 2: ' + parseInt(num2) + ' Saída: ' + soma);