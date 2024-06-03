console.log("Atividade 1")
let a = 10;
let b = 20;
let c = 30;

if (a + b < c) {
    console.log("A soma de A + B é MENOR que C")
} else if (a + b === c) {
    console.log("A soma de A + B é IGUAL a C")
} else {
    console.log("A soma de A + B é MAIOR que C")
}

console.log("Atividade 2")
function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

let evenNumber = 10;
let oddNumber = 15;

if (isEven(evenNumber)) {
    console.log(evenNumber + " é par")
} else {
    console.log(evenNumber + " é impar")
}

if (isOdd(oddNumber)) {
    console.log(oddNumber + " é impar")
} else {
    console.log(oddNumber + " é par")
}

console.log("Atividade 3")
let trueVar = true;
let falseVar = false;

if (trueVar && falseVar) {
    console.log("Ambos são VERDADEIROS")
} else {
    console.log("Um dos valores não é VERDADEIRO")
}

console.log("Atividade 4")
let num1 = 43;
let num2 = 65;
let num3 = 21;
let numArray = [num1, num2, num3];
console.log (numArray);

numArray.sort(function(a, b) {
    return b - a;
})
console.log("Números em ordem decrescente:")
numArray.forEach(function(number) {
    console.log(number);
})

console.log("Atividade 5")

// let firstNumber = prompt("Digite um número")
do {
    firstNumber = prompt("Digite um número");
} while (isNaN(Number(firstNumber)));

// let secondNumber = prompt("Digite outro número")
do {
    secondNumber = prompt("Digite outro número");
} while (isNaN(Number(secondNumber)));


if (firstNumber > secondNumber) {
    alert("O número " + firstNumber + " é o maior")
} else if (firstNumber === secondNumber) {
    alert("Os números são iguais")
} else {
    alert("O número " + secondNumber + " é o maior")
}
