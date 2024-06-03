// LOOPS & ARRAYS

// LOOPS

// Estruturas de repetição, também conhecidas como loops, são um recurso fundamental na programação em JavaScript (e em outras linguagens de programação). Uma estrutura de repetição permite que um bloco de código seja executado repetidamente, enquanto uma determinada condição for verdadeira.

// EXISTEM 3 TIPOS DE LOOPS

// for loop
// O for loop é usado quando sabemos exatamente quantas vezes o loop deve ser executado. Ele usa uma variável de controle, que é inicializada com um valor, testada em relação a uma condição e incrementada ou decrementada a cada iteração do loop.
// Ponto de Partida; Ponto de Limite; Incrementação do Ponto de Partida (para que o Loop não seja infinito).
console.log("Loop for")
for(let i = 0; i < 10; i++) {
    console.log(i)
}

// while loop
// O while loop é usado quando não sabemos exatamente quantas vezes o loop deve ser executado. Ele usa uma condição que é testada antes de cada iteração do loop. Enquanto a condição for verdadeira, o loop continuará a ser executado.
console.log("Loop while")
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do <this> while loop
// O do...while loop é semelhante ao while loop, mas a condição é testada depois da primeira iteração do loop. Isso significa que o bloco de código dentro do loop será executado pelo menos uma vez, mesmo se a condição for falsa na primeira iteração.
console.log("Loop do {} while")
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);

// ATIVIDADES LOOP FOR
console.log("Atividade 1")
function renderUpToTwenty() {
    let renderTwentyArray = []
    for(let i = 0; i <= 20; i++) {
        renderTwentyArray.push (i)
    }
    return renderTwentyArray
}
console.log(renderUpToTwenty())

console.log("Atividade 2")
function tenInTenToAHundred() {
    let toHundredArray = []
    for(let i = 10; i <= 100; i = i + 10) {
        toHundredArray.push(i)
    }
    return toHundredArray
}
console.log(tenInTenToAHundred())

console.log("Atividade 3")
function oddUpToTwenty() {
    let oddsArray = []
    for(let i = 0; i <= 20; i++) {
        if(i % 2 != 0) {
            oddsArray.push(i)
        }
    }
    return oddsArray
}
console.log(oddUpToTwenty())

console.log("Atividade 4")
function evenUpToTwenty() {
    let evenArray = []
    for(let i = 0; i <= 20; i++) {
        if(i % 2 == 0) {
            evenArray.push(i)
        }
    }
    return evenArray
}
console.log(evenUpToTwenty())

console.log("Atividade 5")
function fromNegativeToZero() {
    let negativesArray = []
    for(let i = -10; i <= 0; i++) {
       negativesArray.push(i)
    }
    return negativesArray
}
console.log(fromNegativeToZero())

console.log("Atividade 6")
function inDescendingDirection() {
    let descendingArray = []
    for(let i = 10; i >= 0; i = i - 1) {
        descendingArray.push(i)
    }
    return descendingArray
}
console.log(inDescendingDirection())

console.log("Atividade 7")
function toSquare() {
    let toSqrtArray = []
    for(let i = 1; i <= 10; i++) {
        toSqrtArray.push(`${i}, ${i * i} - `)
    }
    return toSqrtArray
}
console.log(toSquare())

// ATIVIDADE LOOPS FOR II

console.log("Atividade 8")
function toSquareInt() {
    let toSquareArray = []
    for(let i = 15; i <= 200; i++) {
        toSquareArray.push(`${i}, ${i * i} - `)
    }
    return toSquareArray
}
console.log(toSquareInt())

console.log("Atividade 9")
function sumFirstHundred() {
    let sum = 0
    for(let i = 1; i <= 100; i++) {
        sum += i
    }
    return sum
}
console.log(sumFirstHundred())

console.log("Atividade 10")
function divisibleByFour() {
    let byFourArray = []
    for(let i = 0; i < 200; i++) {
        if(i % 4 === 0) {
            byFourArray.push(i)
        }
    }
    return byFourArray
}
console.log(divisibleByFour())

console.log("Atividade 11") 
function sumAndAvg() {
    let sum = 0
    let totEven = 0
    for(let i = 50; i <= 70; i++) {
        if(i % 2 == 0) {
            sum += i
            totEven++
        }
    }
    return `A soma é ${sum} e a média é ${sum / totEven}`
}
console.log(sumAndAvg())

console.log("Atividade 12")
// ⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.
function fibonacciNumbers() {
    let anterior = 0;
    let atual = 1;
    let proximo;
    let fibonacciList = []

    for(let i = 1; i <= 15; i++) {
        fibonacciList.push(anterior) // = 0, 1, 1, 
        proximo = atual + anterior // = 1, 2, 3, 
        anterior = atual // = 1, 1, 2, 
        atual = proximo // = 1, 2, 3, 
    }
    return fibonacciList
}

console.log(fibonacciNumbers())

console.log("Atividade 13")
// Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior.

// Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos (neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos adicionados é sempre o dobro da quantidade anterior.
function chessboardGrains() {
    let anterior = 1 // = 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096
    let total = 0 // = 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095
    for(let i = 1; i <= 64; i++) {
        total += anterior 
        anterior *= 2 
    }
    return total
}
console.log(chessboardGrains())

// LOOP WHILE

// Exemplos

// let codigo = prompt("Digite o código enviado para o seu e-mail")

// while(codigo != 1234) {
//     alert("Código incorreto")
//     codigo = prompt("Digite o código correto")
// }
// alert("Código correto, sua senha pode ser recuperada")
console.log("Exemplos: Loop While")
let counter = 0
console.log(counter, ", Beginning of the Loop")
while (counter < 10) {
    console.log(`Counter is at number ${counter}`)
    counter++
}
console.log("End of Loop")

function timesTwoOddsOnly () {
    let counter = 0
    console.log("Beginning of Loop")
    while(counter <= 10) {
        if(counter % 2 !== 0) {
            console.log(`Counter is currently at number ${counter}, therefore`)
            console.log(`2 x ${counter} = ${counter * 2}`)
        } else {
            console.log(`Counter is currently at number ${counter}`)
        }
        counter++
    }
    console.log("End of Loop")
}
console.log(timesTwoOddsOnly())

// 💪 Atividade - Loops while
console.log("Atividades com Loop While")
console.log("Atividade 1")

function breakfastOrder() {
let choice = parseInt(prompt("Digite o código do produto ou 0 para sair:\n 101: Cachorro Quente\n 102: Bauru Simples\n 103: Bauru com Ovo\n 104: Hamburguer"))
let totalOrderValue = 0
let quantity = 0

while(choice != 0) {
    if(choice == 100) {
        quantity = parseInt(prompt("Quantos você deseja?"))
        totalOrderValue += quantity * 1.20
    }else if(choice == 101) {
        quantity = parseInt(prompt("Quantos você deseja?"))
        totalOrderValue += quantity * 1.20
    }else if(choice == 102) {
        quantity = parseInt(prompt("Quantos você deseja?"))
        totalOrderValue += quantity * 1.30
    }else if(choice == 103) {
        quantity = parseInt(prompt("Quantos você deseja?"))
        totalOrderValue += quantity * 1.50
    }else if(choice == 104) {
        quantity = parseInt(prompt("Quantos você deseja?"))
        totalOrderValue += quantity * 1.20
    } else {
        alert("Produto não existente!")
    }
    choice = parseInt(prompt("Digite o código do produto ou 0 para sair:\n 101: Cachorro Quente\n 102: Bauru Simples\n 103: Bauru com Ovo\n 104: Hamburguer"))
}
alert(`Valor total do pedido: $${totalOrderValue}`)
console.log(`Valor total do pedido: $${totalOrderValue}`)
}
console.log(`execute a função breakfastOrder() para ver o resultado`)

console.log("Atividade 2")
function zeroToTen() {
    let number = parseInt(prompt(`Digite um número válido de 0 a 10`))

    while(number < 0 || number > 10) {
        alert(`Digite um número válido de 0 a 10`)
        number = parseInt(prompt(`Tente novamente`))
    }
    alert(`O número ${number} é um número válido`)
}
console.log(`Execute a função zeroToTen() para ver o resultado`)

console.log("Atividade 3")
function signUp() {
    let username = prompt(`Digite seu nome de usuário`)
    let password = prompt(`Digite a sua senha`)

    while(password.includes(username)) {
        alert(`Sua senha não pode conter seu nome de usuario`)
        password = prompt(`Tente novamente`)
    }
    alert(`Conta criada com sucesso!`)
}
console.log(`Execute a função signUp() para ver o resultado`)

console.log("Atividade 4")
function sumBetweenZeroTen () {
    let number = parseInt(prompt(`Insira um número`))
    let sumTotal = 0
    let quantity = 0
    while(number >= 1 && number <= 10) {
        sumTotal += number
        quantity++
        number = parseInt(prompt(`Insira outro número`))
    }
    alert(`A soma dos números digitados, exceto o último, é de ${sumTotal} e a média da soma é ${sumTotal / quantity}`)
}
console.log(`Execute a função sumBetweenZeroTen() para ver o resultado`)

console.log("Atividade 5")
function castYourVote() {
    let vote = prompt(`Insira o seu voto:\nCandidato A = A\nCandidato B = B\nCandidato C = C`)
    let candidateA = 0
    let candidateB = 0
    let candidateC = 0
    let endVote = "x"
    while(vote.toLowerCase() !== endVote) {
        if(vote.toLowerCase() == "a") {
            candidateA++
            alert(`Voto registrado com sucesso!`)
        } else if(vote.toLowerCase() == "b") {
            candidateB++
            alert(`Voto registrado com sucesso!`)
        }else if(vote.toLowerCase() == "c") {
            candidateC++
            alert(`Voto registrado com sucesso!`)
        }else {
            alert(`Candidato não encontrado`)
        }
        vote = prompt(`Insira o seu voto:\nCandidato A = A\nCandidato B = B\nCandidato C = C`)
    }
    alert(`Contagem dos Votos:\nCandidato A: ${candidateA}\nCandidato B: ${candidateB}\nCandidato C: ${candidateC}`)
}
console.log(`Execute a função castYourVote() para ver o resultado`)


// ARRAYS
console.log(">>> ARRAYS <<<")

// Arrays são uma estrutura de dados fundamental em programação. Eles são usados para armazenar coleções de valores relacionados, como uma lista de números ou uma lista de nomes

let exampleArray = [1, "A string", true, 50.13]
console.table(exampleArray)

// Acessando os valores

// Você pode acessar elementos individuais do array usando o operador de colchetes ([ ]) e o índice do elemento que deseja acessar.

// Podemos ver o valor localizado em determinado índice pelo console.table()
console.log(exampleArray[1]) // Output: "A string"

// Metodos usados em Arrays

// Em JavaScript, os arrays são objetos que possuem muitos métodos nativos para manipular seus elementos. Alguns dos principais métodos de arrays em JS são:

// .push(): adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.

// .pop(): remove o último elemento do array e o retorna.

// .shift(): remove o primeiro elemento do array e retorna o elemento removido. Todos os outros elementos do array são movidos para um índice menor.

// .unshift(): adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array. Todos os outros elementos do array são movidos para um índice maior.

// .length: retorna o número de elementos que estão atualmente contidos no array.


// LOOPS EM ARRAYS

// Imagine que temos uma lista com nomes de usuários e queremos mostrar na tela cada um desses nomes. Podemos utilizar da estrutura de repetição para montar uma lógica para mostrar na tela todos os elementos desse array.

// Exemplo

let users = ['John', 'Marie', 'Peter', 'Nicole', 'Riley', 'Adriana', 'Abella', 'Lena']

for(let i = 0; i < users.length; i++) {
    console.log('Índice:', i, users[i])
}

// Capturando um nome específico no Array
console.log(users[2]) // Output: 'Peter'

// Adicionando um nome no Array
users.push('Mia')
console.log(users) // Output: users + 'Mia'

// Removendo o último elemento do Array
users.pop()
console.log(users) // Output: users - 'Mia'

// Removendo o primeiro elemento do array
users.shift()
console.log(users) // Output: users - 'John'

// Adicionando um nome ao início do Array
users.unshift('Sasha')
console.log(users) // Output: 'Sasha' + users

// EXERCÍCIOS

console.log("Atividade 1")

function insertOnArray(string) {
    let emptyArray = []
        if(string.length >= 5 && typeof string === 'string') {
            emptyArray.push(string)
        }
    return emptyArray
}
console.log(insertOnArray("Texto"))

console.log("Atividade 2")

function theatre(number) {
    let characters = [
    "Hermanoteu", 
    "Olonéia", 
    "Micalatéia", 
    "Godah"
    ]
    if(number >= 0 && number < characters.length) {
        return characters[number]
    } else {
        return "Personagem não encontrado"
    }
}
console.log(theatre(2))

console.log("Atividade 3")

function integNumber(number) {
    let numArray = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
    if(numArray[number] % 2 == 0) {
        return "O valor encontrado nesta posição é par"
    } else if(numArray[number] % 2 != 0) {
        return "O valor encontrado nesta posição é ímpar"
    }
}
console.log(integNumber(1))

console.log("Atividade 4")

let namesArray = [
    "Pedro",
    "Rafael",
    "José"
]

function manyNames(nameList) {
    let biggestName = ""
    for(let i = 0; i < namesArray.length; i++) {
        const currentIndex = nameList[i]
        if(currentIndex.length > biggestName.length) {
            biggestName = currentIndex
        }
    }
    return `O nome ${biggestName} é o maior da lista.`
}
console.log(manyNames(namesArray))

console.log("Atividade 5")

let integerArray = [
    1,
    4,
    6,
    9,
    11,
    8
]

function sumValues(numberList) {
    let sum = 0
    sum = numberList[numberList.length -1] + numberList[numberList.length -2]
    if(sum % 2 == 0) {
        return "A soma é um múltiplo de 2"
    } else {
        return "A soma não é um múltiplo de 2"
    }
}
console.log(sumValues(integerArray))

console.log("Atividade 6")

namesArray = [
    "Pedro", 
    "Rafael", 
    "José", 
    "Carla", 
    "Maria", 
    "Josef", 
    "Raquel"
]

function manyOtherNames(nameList, name, number) {
    let position = nameList[number]
    if(position === name && number < nameList.length) {
        return "Acertei!"
    } else if(position !== name && number < nameList.length) {
        return "Não é quem eu pensava!"
    } else {
        return "O número tem que ser entre 0 e 6"
    }
}
console.log(manyOtherNames(namesArray, "Raquel", 6))

console.log("Atividade 7")

let numberArrayOne = [
    1,
    2,
    3,
    4,
    5,
    6,
    10,
    7]

let numberArrayTwo = [
    5,
    7,
    9,
    4,
    2,
    3,
    9
]

function whosBigger(listOne, listTwo) {
    if(listOne.length > listTwo.length) {
        return `A maior lista é a lista cujo último número é: ${listOne[listOne.length - 1]}`
    } else {
        return `A maior lista é a lista cujo último número é: ${listTwo[listTwo.length - 1]}`
    }
}
console.log(whosBigger(numberArrayOne, numberArrayTwo))

console.log("Os próximos exercícios são todos baseados neste array")
const elementList = [
    1,
    5,
    7,
    9,
    3, 
    "10", 
    "11", 
    "15"
]
console.table(elementList)

console.log("Atividade 8")

function returnAllElements() {
    return console.log(elementList)
}
returnAllElements()

console.log("Atividade 9")

function returnSpecificValue (number) {
    let value = elementList[number]
    if(!isNaN(number) && 
    number >= 0 && 
    number < elementList.length) {
    return `O valor contido nesta posição é: ${value}`
    } else {
        return "Por favor, insira apenas números"
    }
}
console.log(returnSpecificValue(5))

console.log("Atividade 10")

function returnElementType(index) {
    let element = elementList[index];
    if (typeof element === "number") {
        return `O elemento ${element} é um elemento do tipo número`;
    } else if (typeof element === "string") {
        return `O elemento ${element} é um elemento do tipo string/texto`;
    } else {
        return `O elemento ${element} é um elemento do tipo ${typeof element}`;
    }
}
console.log(returnElementType(5))

console.log("Atividade 11")

function removeLastStringElement() {
    if(typeof elementList[elementList.length -1] == "string") {
        elementList.pop()
        console.log(elementList)
        return `Elemento deletado com sucesso`
    } else {
        return `Falha ao remover o elemento da lista`
    }
}
console.log(removeLastStringElement())

console.log("Atividade 12")

function positionSearch(position) {
    for(let i = 0; i < elementList.length; i++) {
        if(position === elementList[i]) {
            return `O valor procurado está na posição: ${i}`
        }
    }
    return `Valor não encontrado`
}
console.log(elementList)
console.log(positionSearch("11"))

console.log("Atividade 13")

function removeSpecificElement(elements) {
    let searchForIndex = elementList.indexOf(elements)
    if(elementList.includes(elements)) {
       elementList.splice(searchForIndex, 1)
       console.log(elementList)
       return `Elemento ${elements} deletado com sucesso!`
    }
    console.log(elementList)
    return `Elemento não encontrado`
}
console.log(removeSpecificElement(1))

console.log("Atividade 14")

function insertOnRightPosition(elements) {
    if(elements >= 0 &&
    elements <= 10 &&
    typeof elements === "number") {
        elementList.unshift(elements)
        console.log(`O número ${elements} foi adicionado ao início da lista`)
        console.log(elementList)
        return `Lista atualizada com sucesso`
        } else if(typeof elements === "string") {
            elementList.push(elements)
            console.log(`A string ${elements} foi adicionada ao final da lista`)
            console.log(elementList)
            return `Lista atualizada com sucesso`
        } else {
            console.log(elementList)
            return `O valor ${elements} não é um número, nem uma string (${elements} is a ${typeof elements}). Portanto, não pode ser adicionado a lista`
        }
}
console.log(insertOnRightPosition("15"))

// MANIPULAÇÃO DE LOOPS

console.log(">>> MANIPULAÇÃO DE LOOPS")

console.log("Atividade 15")

function verticalText(string) {
    for(let i = 0; i < string.length; i++) {
        if(typeof string == "string") {
            console.log(string[i])
        }
    }
}
console.log(verticalText("Frontend"))

console.log("Atividade 16")

function incrementText (string) {
    let word = ""
    for(let i = 0; i < string.length; i++) {
        if(typeof string == "string") {
            word += string[i]
            console.log(word)
        }
    }
}
console.log(incrementText("Backend"))

console.log("Atividade 17")

function incrementTextBackwards(string) {
    let word = ""
    for(let i = string.length - 1; i >= 0; i--) {
        if(typeof string == "string") {
            word = string[i] + word
            console.log(word)
        }
    }
}
console.log(incrementTextBackwards("Fullstack"))

console.log("Atividade 18")

function padEnd(string, times, repeat) {
    let finalWord = string
    for(let i = 0; i < times; i++) {
        if(typeof string == "string") {
            finalWord += repeat
        }
    }
    return finalWord
}
console.log(padEnd("Ahh lelek ", 5, "lek"))

console.log("Atividade 19") 

function subString(string, pos1, pos2) {
    let finalWord = ""
    for(let i = pos1; i < pos2; i++) {
        if(typeof string == "string" &&
        i != pos1 &&
        i != pos2) {
            finalWord += string[i]
        }
    }
    return finalWord
}
console.log(subString("Mozilla", 0, 4))

console.log("Atividade 20")

function stringRepeater(string, repeat) {
    let finalWord = ""
    for(let i = 0; i < repeat; i++) {
        if(typeof string == "string") {
            finalWord += string
        }
    }
    return finalWord
}
console.log(stringRepeater("Refrão da música. ", 3))

console.log("Atividade 21")

function stringCentralizer(string, repeat, border) {
    let finalWord = ""
    for(let i = 0; i < repeat; i++) {
        if(typeof string == "string") {
            finalWord+= border
        }
    }
    return `${finalWord} > ${string} < ${finalWord}`
}
console.log(stringCentralizer("Ariadne", 3, "Eu Te Amo "))

// Também pode ser feito como: let finalWord = ` ${string} `
// for(let i = 0; i < repeat; i++) {
//      finalWord = border + finalWord + border}
// return finalWord

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/ /g, '').toLowerCase();
    let forwards = "";
    let backwards = "";
    // Build forwards and backwards strings
    for (let i = 0; i < cleanStr.length; i++) {
        forwards += cleanStr[i];
        backwards = cleanStr[i] + backwards;
    }
    // Check if forwards is equal to backwards
    return forwards === backwards;
}

function findMin(arr) {
    let min = 0; // Assume the minimum number is 0 initially
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] < min) {
            min = arr[i]; // Update min if a smaller number is found
        }
    }
    return min;
}

const numbers = [3, 1, 7, 2, 5];
const minNumber = findMin(numbers);
console.log("Minimum number:", minNumber); // Output: 1


// ARRAYS ANINHADOS

// Arrays aninhados em JavaScript, também conhecidos como arrays multidimensionais, são arrays que contêm outros arrays como elementos. Isso significa que cada elemento de um array aninhado é, na verdade, outro array.

// Array aninhado
const arrayAninhado = [
    [1, 2, 3], // Indice 0 (Sub-Índices: 0, 1, 2)
    [4, 5, 6], // Indice 1 (Sub-Índices: 0, 1, 2)
    [7, 8, 9], // Indice 2 (Sub-Índices: 0, 1, 2)
];
  
// Acessando o terceiro sub-array (indice 2 do arrayAninhado)
const terceiroSubArray = arrayAninhado[2];
console.log(terceiroSubArray);
// Saída: [7, 8, 9]
  
/*
    Acessando o primeiro elemento do terceiro sub-array
*/
const valorSete = arrayAninhado[2][0];
console.log(valorSete); // Saída: 7

// Para navegar entre as posições de um array aninhado em JS, é possível utilizar um ou mais loops, dependendo do nível de aninhamento. Suponha que temos um array aninhado de instrumentos musicais, em que cada sub-array representa uma categoria de instrumento e contém uma lista de instrumentos nessa categoria. Podemos navegar por todas as posições desse array utilizando loops aninhados, como no exemplo abaixo:

const instrumentos = [
    ["Bateria", "Pandeiro", "Repinique"], // Percussão
    ["Violão", "Guitarra", "Baixo"], // Corda
    ["Flauta", "Saxofone", "Trompete"], // Sopro
];
  
// Primeiro for itera sobre o array instrumentos
for (let i = 0; i < instrumentos.length; i++) {
// Segundo for itera sobre cada sub-array
    for (let j = 0; j < instrumentos[i].length; j++) {
        console.log(instrumentos[i][j]);
    }
}

console.log('💪 Atividade - Trabalhando com Arrays II')

console.log('Atividade 1')
// Escreva uma função que receba uma lista a de dimensão 30 composta apenas por números inteiros. A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.

let oneToThirty = []
for(let i = 1; i <= 30; i++) {
    oneToThirty.push(i)
}

function oddsAndEvens(list) {
    let odds = 0
    let evens = 0

    for(let i = 0; i < list.length; i++) {
        if(list[i] % 2 === 0) {
            evens++
        } else {
            odds++
        }
    }
    return `A lista recebida possui ${evens} elementos pares e ${odds} elementos ímpares`
}

console.log('Atividade 2')
// Escreva uma função que recebe uma lista b de tamanho 10, composta por números inteiros.⁠ Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.

let oneToTen = []
for(let i = 1; i <= 10; i++) {
    oneToTen.push(i)
}

function oddsAndPercentage(list) {
    let numTotal = 0
    let odds = 0

    for(let i = 0; i < list.length; i++) {
        numTotal++
        if(list[i] % 2 !== 0) {
            odds++
        }
    }
    return `O total de valores ímpares é ${odds} e corresponde a ${(odds / numTotal) * 100}% da lista`
}

console.log('Atividade 3')
// Escreva uma função que receba como parâmetro duas listas a e b, cada uma com dez elementos. ⁠A função deve realizar a validação do tamanho da lista. Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários".
// A lista a deve ser composta por valores divisíveis por 2 e 3, enquanto a lista b deve ser composta apenar por valores múltiplos de 5. ⁠A composição das listas deve ser validada pela função. Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados".

let byTwoAndThree = []
for(let i = 1; i <= 100; i++) {
    if(byTwoAndThree.length >= 10) {
        break
    }
    if(i % 3 === 0 &&
        i % 2 === 0) {
            byTwoAndThree.push(i)
    }
}

let timesFive = []
for(let i = 1; i <= 10; i++) {
    let multiply = i * 5
    timesFive.push(multiply)
}

function listWithTen(listA, listB) {
    if(listA.length !== 10 ||
        listB.length !== 10)
        return `Lista fora dos padrões necessários`
    for(let i = 0; i < listA.length; i++) {
        if(listA[i] % 2 !== 0 &&
            listA[i] % 3 !== 0 ||
            listB[i] % 5 !== 0) {
                return `Valores não permitidos encontrados`
        }
    }
    return console.log(byTwoAndThree, timesFive)
}

console.log('💪 Atividade - Loops, Funções e Arrays')

console.log('Atividade 1')
// Escreva uma função que consiga inserir novos elementos em uma lista. A lista pode armazenar no máximo 10 elementos. ⁠Elementos do tipo string com mais de 7 caracteres não são permitidos. 
// Em caso de sucesso, retorne: "Elemento inserido com sucesso, a lista agora é: x" sendo x lista atualizada. 
// Em caso de falha, retorne: "Não foi possível inserir este valor"

let emptyList = []

function insertNewElements(list, element) {
    if(list.length < 10) {
        if(typeof element === 'string') {
            if(element.length > 7) {
                return `Insira palavras com 7 letras ou menos`
            } else {
                list.push(element)
                return `Elemento inserido com sucesso! A lista agora é ${list}`
            }
        } else {
            list.push(element)
            return `Elemento inserido com sucesso! A lista agora é ${list}`
        }
    }
    return `Não foi possível inserir este valor`
}

console.log('Atividade 2')
// Escreva uma função que recebe uma lista a como parâmetro. A lista a deve ter exatamente 15 elementos inteiros. ⁠Crie também uma lista b de mesmo tipo, observando a seguinte lei de formação: 
// "Todo elemento da matriz b deve ser o quadrado do elemento da matriz a correspondente". 

let oneToFifteen = []
let squareOf = []
for(let i = 1; i <= 15; i++) {
    oneToFifteen.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
}

function returnSquare(listA) {
    for(let i = 0; i < listA.length; i++) {
        let helper = listA[i] ** 2
        squareOf.push(helper)
    }
    for(let i = 0; i < listA.length; i++) {
        if(squareOf[i] !== listA[i] ** 2) {
            return `O número${squareOf[i]} não é o quadrado de ${listA[i]}`
        }
    }
    return squareOf
}

console.log('💪 Atividade - Caixa de Suprimentos')
// Nessa atividade vamos treinar nossos conhecimentos em Arrays aninhados.

console.log('Atividade - Itens para acampar')

// Você e seus amigos decidiram ir acampar. Antes de mais nada fizeram uma lista, onde cada amigo deve comprar 5 itens para levar para a viagem.

// Cada amigo ficou responsável por uma seção de itens. As seções são: Higiene, Alimentação, Farmácia e Lazer. Seus amigos devem trazer exatamente cinco itens de cada seção. Todos os itens serão colocados juntos na caixa de suprimentos.

// Cada amigo representa um array e a caixa de suprimentos é a composição destes arrays. Você deve colocar os itens dentro da caixa de forma organizada, separando as seções, afinal de contas, não queremos nossos marshmallows com gosto de desinfetante.

// CONDIÇÕES

// Os amigos não podem comprar mais ou menos do que cinco itens, ou seja, tem que ser exatamente cinco itens.

// Caso alguém compre mais itens ou menos itens, você deverá retornar uma mensagem.

let higiene = []
let food = []
let medicine = []
let leisure = []
let supplyBox = [higiene, food, medicine, leisure]

function letsGoCamping(supplies) {
    if(supplies.length < 4) {
        return `Algum amigo ainda não retornou com os itens`
    }
    if(supplies.length > 4) {
        return `Acho que temos um intruso`
    }
    if(supplies.length === 4) {
        for(let i = 0; i < supplies.length; i++) {
            if(supplies[i].length < 5) {
                return `Precisamos de mais itens desta seção`
            }
            if(supplies[i].length > 5) {
                return `Tem itens demais, não precisamos de tanto`
            }
        }
        return `Podemos ir acampar`
    }
}

function shopForSupplies(supplies, section, item) {
    if(supplies.length !== 4) {
        return `Precisamos de mais tipos de suprimentos`
    }
    if(section.length < 5) {
        section.push(item)
        console.log(`Item ${item} adicionado a ${section}`)
    } else {
        return `Temos itens suficiente em ${section}`
    }
    return supplies
}

