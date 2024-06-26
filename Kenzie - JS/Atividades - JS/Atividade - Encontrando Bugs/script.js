// Exercício 1
// Você foi contratado por uma empresa de software para corrigir alguns bugs. A empresa possui diversos produtos e precisa da sua ajuda para analisar e corrigir algumas funções.

// A função calculaIMC deve receber dois parâmetros, o peso em quilogramas e a altura em metros. É necessário retornar o índice de massa corporal do usuário.

// Dica: Fórmula para o cálculo é: IMC = peso / altura²

function calculaIMC(peso, altura) {
    let alturaAoQuadrado = altura * altura;
    let imc = peso / alturaAoQuadrado;
    return imc
  }

console.log(calculaIMC(80,1.80))

// Exercício 2
// A função calculaIdade deve receber três parâmetros: um nome, anoFuturo, que representa um ano no futuro e anoNascimento, que representa o ano de nascimento. O objetivo dessa função é calcular a idade futura de uma pessoa tendo como base o ano de nascimento e o ano futuro.

function calculaIdade(nome, anoFuturo, anoNascimento) {
    let idade = anoFuturo - anoNascimento;
    return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
  }

calculaIdade("Pedro", 2030, 2002)

// Exercício 3
// A função algarismosEmUmNumero deve receber como parâmetro um número inteiro ou com parte decimal e deve retornar a quantidade de algarismos que compõem esse numero.

// Vale relembrar que ao realizarmos a conversão de um número para um texto, o ponto que divide a parte inteira da parte decimal é convertida junto, portanto, é necessário tratar caso o número apresente ponto flutuante.

function algarismosEmUmNumero(n) {
    let str = `${n}`;
    let contagem = str.length;
  
    if (n != parseInt(n)) {
      contagem = contagem - 1;
    }
    return contagem;
}

console.log(algarismosEmUmNumero(3.14159265))

// Exercício 4
// A função diaDaSemana deve receber por parâmetro um valor em formato de número ou texto, e retornar em texto o dia da semana que ele representa, seguindo a lista abaixo:

// Domingo
// Segunda-feira
// Terça-feira
// Quarta-feira
// Quinta-feira
// Sexta-feira
// Sábado
// Caso o número recebido por parâmetro for inválido, você deve retornar o texto: 'Valor Inválido'.

function diaDaSemana(n) {
    let resultado = "Resultado Invalido";
  
    if (n == 1 || n === '1') {
        resultado = 'Domingo';
    } else if(n === 2 || n === '2') {
        resultado = 'Segunda-feira';
    } else if(n === 3 || n === '3') {
        resultado = 'Terça-feira';
    } else if(n === 4 || n === '4') {
        resultado = 'Quarta-feira';
    } else if(n === 5 || n === '5') {
        resultado = 'Quinta-feira';
    } else if(n === 6 || n === '6') {
        resultado = 'Sexta-feira'; 
    } else if(n === 7 || n === '7') {
        resultado = 'Sábado';
    }
    return resultado;
}
console.log(diaDaSemana('1'))









