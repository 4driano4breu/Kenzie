// Exercício 1
// Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova. Então, a função deve retornar a nova frase com o resultado da substituição. 

function mudaPalavra(frase, palavraAntiga, palavraNova){
    const fraseNova = frase.replace(palavraAntiga, palavraNova)
    return fraseNova
}

console.log(mudaPalavra('Quero dinheiro', 'dinheiro', 'trabalho'))

// Exercício 2
// Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3, que representam as notas de um aluno em três avaliações. A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.

