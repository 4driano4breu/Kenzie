/*Exercício 1
Declare uma variável chamada num1 e atribua a ela o valor 5. Em seguida, declare uma variável chamada num2 e atribua a ela o valor 10. Some as duas variáveis e imprima o resultado no console.*/

var num1 = 2
var num2 = 3
var num3 = num1 + num2;
console.log(num3);

/*Exercício 2
Declare uma variável chamada pi e atribua a ela o valor de 3.14. Em seguida, declare uma variável chamada raio e atribua a ela o valor 5. Calcule o comprimento da circunferência com base no raio e imprima o resultado no console. (dica: multiplique o raio pelo valor de pi e pelo número dois)*/

var pi = 3.14;
var raio = 5;
var circumferencia = (2 * pi) * raio;
var area = pi * (raio * raio);
console.log(circumferencia);
console.log(area);

/*Exercício 3
Declare uma variável chamada temperatura e atribua a ela o valor 30. Em seguida, converta a temperatura de Celsius para Fahrenheit e imprima o resultado no console. (dica: para converter de Celsius para Fahrenheit, basta multiplicar a temperatura por nove, após isso dividir o valor por cinco e somar trinta e dois)*/

var temperatura_Celsius = 30;
var celsius_Fahrenheit = ((temperatura_Celsius * 9) / 5) + 32;
console.log(celsius_Fahrenheit);

/*Exercício 4
Declare uma variável chamada nota1 e atribua a ela o valor 7. Em seguida, declare uma variável chamada nota2 e atribua a ela o valor 9. Calcule a média das duas notas e imprima o resultado no console.*/

var nota1 = 7;
var nota2 = 9;
var media = (nota1 + nota2) / 2;
console.log(media);

/*Exercício 5
Declare uma variável chamada largura e atribua a ela o valor 10. Em seguida, declare uma variável chamada comprimento e atribua a ela o valor 20. Calcule a área do retângulo e imprima o resultado no console*/

var largura = 10;
var comprimento = 20;
var area_2 = largura * comprimento;
console.log(area_2)

/*Exercício 6
Declare uma variável chamada salarioBruto e atribua a ela o valor 5000. Em seguida, calcule e imprima o salário líquido, considerando um desconto de 10% para impostos.*/

var salario_Bruto = 5000;
var salario_Liquido = salario_Bruto * 0.90;
console.log(salario_Liquido);

/*Exercício 7
Declare uma variável chamada horasTrabalhadas e atribua a ela o valor 40. Em seguida, declare uma variável chamada valorHora e atribua a ela o valor 50. Calcule o salário bruto de uma pessoa e imprima o resultado no console.*/

var horasTrabalhadas = 40
var valorHora = 50
var salario_Bruto = horasTrabalhadas * valorHora;
var salario_Liquido = salario_Bruto * 0.90;
console.log(salario_Bruto);
console.log(salario_Liquido);


var palavra_1 = "o";
var palavra_2 = "i";
var palavra_3 = palavra_1 + palavra_2;

console.log(palavra_3);
