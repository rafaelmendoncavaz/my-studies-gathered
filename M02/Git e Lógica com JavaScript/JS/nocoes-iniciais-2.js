// Array, Iteração e Funções

// Array
const umArray = [1, 2, 3.5, 4.8, 5, "a", "b", "c", true, false, undefined, null, ["arranjo dentro de outro arranjo"], {}];
console.log (umArray);
// Array são arranjos marcados por [] e que podem conter diversos tipos de dados diferentes, inclusive outros arranjos e objetos marcados por {}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringsArray = ["Abelha", "Boi", "Cavalo", "Doninha", "Elefante"];
let mixedArray = ["um", 2, "três", 4, "cinco", 6, "sete", 8, "nove"];
//Arrays são colocados sempre em sequência desejada, e é assim que sua posição é determinada/acessada. Sempre começa de 0 e vai até 'n'.

console.log (stringsArray);
// Aqui você está acessando todo o conjunto dentro do stringsArray;
console.log (stringsArray [2]);
// Aqui você está acessando um 'string' específico na posição 2 (0, 1, 2), o "Cavalo".
console.log (numbersArray [5]);
// Aqui você está acessando um 'número' específico na posição 5, que é o valor "6".
console.log (mixedArray [3]);
// Aqui você está acessando o valor representado pelo "número 4", na posição 3.

// Iteração

// Loops

// SEMPRE determinar: Ponto de Partida; Ponto de Limite; Incrementação do Ponto de Partida (para que o Loop não seja infinito).

//Outras formas de Incrementação do Ponto de Partida:
// i = i + 2 -> Pega o valor de i e soma o valor desejado para o próximo loop
for (let i = 0; i <= 10; i = i + 2) {
    console.log (i)
}
// i += 3 -> Pega o valor atualizado de i e adiciona o valor desejado pro loop
for (let i = 0; i <= 15; i += 3) {
    console.log (i)
}
// i ++ -> Pega o valor de i e faz o próximo loop de 1 em 1
for (let i = 0; i < 10; i++) {
    console.log (i)
 }
// index também pode ser representado apenas por i

// Percorrendo um Array usando um Loop
for (let i = 0; i < numbersArray.length; i++) {
    console.log (numbersArray[5]);
}
// .length determina o Ponto de Limite baseado no tamanho do arranjo nomeado
// No console, ao buscar a posição 5, o Loop passará a quantidade de vezes determinada no Loop Incrementado, buscando a posição determinada. 
for (let i = 0; i < numbersArray.length; i++) {
    console.log (numbersArray[i]);
}
// Neste caso, como quero acessar o 'i', e 'i' começa em 0, e progride de 1 em 1, o Loop irá percorrer o Arranjo até chegar ao tamanho máximo do arranjo, determinado pelo .length

// Também posso usar os dados do Array para fazer outras operações:
for (let i = 0; i < numbersArray.length; i += 3) {
    console.log (numbersArray[i] * 2)
}
// Neste caso, ele irá pegar sempre o último valor atualizado do i no Loop (que será i+3), e multiplicar o valor da posição por 2, por 3 vezes, pois i += 3 significa que: 
// No primeiro Loop, i sairá da posição 0 e multiplica o valor desta posição por 2 (1 * 2 = 2)
// No segundo Loop, i sairá da posição 0 e incrementará 3, tornando i = 3 (4 * 2 = 8)
// No terceiro Loop, i sairá da posição 3 e incrementará 3, tornando i = 6 (7 * 2 = 14)

// Utilizando Loop em Array Mistos
let newArray = []
let insideValue = 0

// Aqui estou usando um Loop, com tamanho do Arranjo Misto e validando estes dados
for (let i = 0; i < mixedArray.length; i++) {;
// Se o Arranjo Misto no índice de 'i' for > 0, a variável 'insideValue' será seu valor atual (0) + o valor do número do Arranjo Misto no índice de 'i'
// As 'strings' não somam justamente por serem strings (não possuem valor)
    if (mixedArray[i] > 0) {
        insideValue = insideValue + mixedArray[i]
    }
// No else, os valores que não puderem ser somados no índice de 'i', ou seja, as 'strings', serão empurradas para a nova variável 'newArray'
    else {
    newArray.push (mixedArray[i])
    }
}
// 'insideValue' agora contém apenas a soma dos números contidos no 'mixedArray'
console.log (insideValue);
// 'newArray' agora contém apenas as 'strings' contidas no 'mixedArray'
console.log (newArray);

// Funções

// Comando: function nomeDaFuncao (nome do parâmetro) {objetos}

//Funções sem parâmetros
function countToTen () {
    for (let i = 1; i <= 10; i++) {
        console.log (i);
    }
}

// A função criada, não executa com o console.log, pois o comando de executar a função, é escrever o nome da função, seguido de ()
// Ex: 
countToTen ();

//Funções com parâmetros

//Aqui eu estabeleci que esta é uma função com parâmetro
function showParam (parameters) {
// Os parâmetros podem levar qualquer nome.
    for (let i = 0; i < parameters.length; i++) {
// Aqui eu criei um Loop, e determinei que o comprimento é o do Arranjo no parâmetro, no caso, 'numbersArray', em incrementos de 1 em 1.
        console.log ("O elemento atual é " + parameters[i])
// Aqui eu determino no console que o que irá aparecer será a string "O elemento atual é ", e somo referenciando o parâmetro que adotei ao executar 'numbersArray', no índice de 'i'.
    }
}

showParam (numbersArray);

// Funções com parâmetros e retorno

function sum (num1, num2) {
// Aqui eu criei uma função com dois parâmetros que nomeei de 'num1' e 'num2'
    return num1 + num2;
// Aqui eu pedi como retorno, a soma destes parâmetros a serem determinados
}

sum (5, 7);
// Aqui eu estou executando a função, mas ela não irá aparecer, pois para visualizar ela precisa estar contida em uma variável.
const result = sum (5, 7);
// Aqui eu criei uma variável constante, e a tornei igual a função
    console.log (result);
// Aqui eu executo a visualização da variável 'result' no console

function biggestWord (fromArray) {
// Aqui estou buscando a maior palavra, tendo como parâmetro meu Arranjo de Strings
    let word = "";
// Crio uma variável sem valor para que possa encontrar a maior palavra
    for (let i = 0; i < fromArray.length; i++) {
// Crio o Loop para buscar dentro do Arranjo no Parâmetro, a maior palavra, começando da primeira posição, em incrementos de 1 em 1.
        const currentElement = fromArray[i];
// Crio uma variável auxiliar com valor do Arranjo em índice de 'i' para facilitar o uso
        if (currentElement.length > word.length) {
// Crio uma verificação usando o 'currentElement' (que representa o Arranjo em índice de 'i'), na condição de que se a palavra iterada for maior do que a variável sem valor 'word', word passa a ter o valor desta palavra. 
            word = currentElement;
// Como afirmado acima, word passa a adquirir um vaor.
        }
    }
    return word;
// Quando todas as iterações do Loop rodarem, o retorno da função será a palavra sobrevivente, contida em 'word'
}
const finalWord = biggestWord(stringsArray);
// Para executar a função, crio a variável constante e dou um nome a ela, e atribuo seu valor com a função que desejo executar, e adicionando o parâmetro que quero referenciar.
console.log (finalWord)
// Demonstro o resultado via console

// Funções sem parâmetros e com retorno

function phraseCreator () {
    const nome = prompt("Digite o seu nome");
    const comida = prompt("Digite sua comida favorita");
    const frase = "Olá, meu nome é " + nome + " e eu gosto de comer " + comida;

    return frase
}

const phraseCreated = phraseCreator ();
alert (phraseCreated);
