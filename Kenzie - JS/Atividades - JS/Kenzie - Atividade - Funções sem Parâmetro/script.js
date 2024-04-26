/*Exercício 1
Desenvolva uma função que mostre no console a frase "Hello World!".*/

function frase(){
    console.log("Hello World!")
}

frase()

/*Exercício 2
Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
Requisitos:

100 de Entregas
100 de Entrevistas Técnicas
100 de Presença
Se os requisitos forem atingidos, mostre no console "Possível monitor(a)." Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."*/

let aluno = "Sebastião"
let entregas = 100;
let entrevistas_tecnicas = 100;
let presencas = 100;

var monitor = false;

function verificacao_monitor(/*aluno,entregas,entrevistas_tecnicas,presencas*/){
    if(entregas >= 100 && entrevistas_tecnicas >= 100 && presencas >= 100){
        console.log("O aluno(a) " + aluno + "é um(a) possível monitor(a)")
    }else{
        console.log("O aluno(a) " + aluno + " não é um(a) possível monitor(a)")
    }
}

verificacao_monitor(aluno)


/*Exercício 3
Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.*/

var num1 = 4
var num2 = 2
var num3 = 3

function maior_valor(/*num1,num2,num3*/){
    if(num1 >= num2 && num1 >= num3){
        console.log("num1")
        console.log(num1)
    }
    else if(num2 >= num3 && num2 >= num3){
        console.log("num2")
        console.log(num2)
    }
    else if(num3 >= num1 && num3 >= num2){
        console.log("num3")
        console.log(num3)
    }
}

maior_valor(/*1,2,3*/)


/*Exercício 4
Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".

Declare as seguintes variáveis dentro da função:

nome
sobrenome
idade*/

function frase_2(){
    let nome = "Francisco"
    let sobrenome = "Vieira"
    let idade = 29

    console.log("Meu nome é "+ nome + " " + sobrenome + ", e tenho " + idade + " anos")
}

frase_2()
