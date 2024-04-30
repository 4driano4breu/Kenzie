/*Exercício 1
Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.*/

function positivoOuNegativo(x){
    if(x >=0){
        return "P"
    }else{
        return "N"
    }
}
positivoOuNegativo(-5)

// Exercício 2
// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.

function quantDigitos(str){
    return str.toString().length
}
console.log(quantDigitos(10))

// Exercício 3
// Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."

function somaDoisNumeros(x,y){
    if(x >= y){
        return x + y
    }
    return "O primeiro número não é maior que o segundo."
}
console.log(somaDoisNumeros(20,30))

// Exercício 4
// Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.

function verificaPrimeiraLetra(palavra,letra){
    if(palavra[0].toLowerCase() == letra.toLowerCase()){
        return true
    }
        return false
}
console.log(verificaPrimeiraLetra("pato","p"))  

// Exercício 5
// Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function horario(horaAtendimento){
    if(horaAtendimento >= 11 && horaAtendimento<=23){
        return "O /pergunta está em horário de funcionamento."
    }
    return "O /pergunta não está em horário de funcionamento."
}

console.log(horario(13))
