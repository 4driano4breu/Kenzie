// Exercício 1
// É necessário realizar a soma com uma função e depois reutilizar esta função para fazer outra operação matemática. Siga os tópicos a seguir:

// Declare uma função somaReutilizavel que receberá dois parâmetros a e b.
// Desenvolva a lógica deste algoritmo para obter o resultado da soma dos dois parâmetros.
// Após isso e já fora da função, declare uma variável resultado e atribua um valor 0 a ela.
// Utilizando a função somaReutilizavel, você deve realizar a operação 10 + 10 e multiplicar por 5, armazenando o valor total na variável resultado.
// Mostre o valor da variável resultado através do console.

function somaReutilizavel(a,b){
    return a + b
}

let resultado = 0
resultado = somaReutilizavel(10,10) * 5

console.log(resultado)

// Exercício 2
// É necessário obter o nome completo de um usuário e depois selecionar apenas as letras iniciais do nome e sobrenome, e para isso é possível desenvolver três funções para a tarefa ser concluída. Siga os tópicos a seguir:

// Declare uma função letraInicial que receberá dois parâmetros nome e sobrenome e retornará a apenas a primeira letra maiúscula de nome e a primeira letra maiúscula de sobrenome.
// Declare uma função nomeCompleto que não receberá parâmetros e retornará uma frase contendo as iniciais do nome e sobrenome. É necessário reutilizar a função letraInicial para retornar a seguinte frase: "As letras inicias do meu nome completo são -letraInicialDoNome- -letraInicialDoSobrenome-"
// Mostre a frase através do console.

function letraInicial(nome,sobrenome){
    return nome[0],sobrenome[0]
}

function nomeCompleto