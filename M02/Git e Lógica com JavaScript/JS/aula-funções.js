// FUNÇÕES

// Função é uma forma de organizar determinado algoritmo em um bloco de código fechado. As funções permitem com que o código seja separado em partes menores, fazendo com que esse código possa ser usado diversas vezes apenas referenciando a função desejada, sem precisar reescrever todo o código.

// Declaração da função que imprime nome completo e empresa
const nome = "Rafael";
const sobrenome = "Mendonça Vaz";
const empresa = "Casa dele";

function formataNomeEmpresa() {
    console.log(
      `O nome completo é: ${nome} ${sobrenome}\nTrabalha na ${empresa}`
    );
  }
  
// Execução da função declarada acima
  formataNomeEmpresa();

// Para declarar uma função em JavaScript, é preciso utilizar a palavra reservada function, seguida do nome que se deseja dar àquela função, conforme exemplificado acima:

// SINTAXE

function nomeDaFuncao (Parâmetro) {
    let logicaDaFunção = "Lógica e sequência de código"
    console.log(logicaDaFunção)
}
// Chamando a função
nomeDaFuncao();

// ATIVIDADES - FUNÇÕES SEM PARÂMETRO

console.log ("Atividade 1")
function greeting () {
    const greet = "Hello"
    const world = "World"
    console.log (`${greet}, ${world}`)
}
greeting();

console.log ("Atividade 2")
let deliver = 100
let specIview = 100
let present = 100

function becomeMonitor() {
    if (deliver >= 100 && specIview >= 100 && present >= 100) {
        console.log ("Possível Monitor(a).")
    } else {
        console.log ("Selecionar outro(a) aluno(a).")
    }
}
becomeMonitor();

console.log ("Atividade 3")
let numArray = [4, 45, 67]
let bigNumber = 0

function biggestNumber () {
    for(let i = 0; i < numArray.length; i++) {
        if (numArray[i] > bigNumber) {
            bigNumber = numArray[i]
        }  
    }
    console.log ("O maior número é o " + bigNumber)
}
biggestNumber();

console.log ("Atividade 4")
const age = 27

function introduction() {
    console.log (`Meu nome é ${nome} ${sobrenome}, e tenho ${age} anos.`)
}
introduction();

// FUNÇÕES COM E SEM RETORNO

// Em JavaScript, uma função é um bloco de código que realiza uma tarefa específica. As funções podem ser definidas com ou sem retorno. Para retornar um valor de uma função, utilizamos a palavra reservada return.

// SEM RETORNO

// Uma função sem retorno é uma função que não retorna um valor. Em vez disso, ela executa um conjunto de instruções e pode ter um efeito colateral, como exibir informações na tela ou alterar variáveis globais. Por exemplo:

function exibirMensagem() {
    console.log('Olá, mundo!');
  }
  
  exibirMensagem(); 
// Saída: "Olá, mundo!"

// COM RETORNO

// Uma função com retorno é uma função que retorna um valor. Esse valor pode ser qualquer tipo de dado, incluindo números, strings, objetos ou outras funções.

// Em JavaScript, a palavra-chave return é usada para indicar o valor que uma função deve retornar quando é chamada. O return é um recurso fundamental em funções, pois permite que elas executem uma determinada tarefa e retornem um resultado para ser usado em outro lugar do código. Quando uma função é chamada, o código dentro dela é executado e, quando o return é encontrado, a função é encerrada e o valor especificado é retornado como resultado da chamada da função.

function calculaAreaCirculo() {
    const pi = 3.14;
    const areaCirculoDeRaioQuatro = pi * 4 * 4;
  
    return areaCirculoDeRaioQuatro;
  }
  
calculaAreaCirculo();

// Executando o código acima, nada nos é retornado no terminal:

// A rotina da função aconteceu normalmente, porém não estamos armazenando o resultado do retorno dessa função para mostrar no console. Vamos ajustar esse ponto apenas com esses dois comandos:

const resultado = calculaAreaCirculo();
console.log(resultado);
// Saída: 50.24

// OUTRO EXEMPLO

function add(x, y) {
    return x + y;
}

let result = add(3, 5); // This will return 8
console.log(result); // Output: 8

// Neste exemplo, a função pega dois parâmetros e os une, e, usando o comando 'return', ele diz que toda vez que chamar a função, os parâmetros nesta função serão somados. 

// O 'return' também pode ser usado para a função ser executada "PARCIALMENTE"

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(5)); // Output: Positive
console.log(checkNumber(-3)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero

// Neste exemplo, dependendo do valor em 'num', a função retorna valores diferentes. Ou seja, assim que um valor de 'return' é encontrado, a função para de executar ali mesmo e nenhum outro código é rodado. 

function isEven(num) {
    if (typeof num !== 'number') {
        return "Not a number";
    }

    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
console.log(isEven("Hello")); // Output: Not a number


// PARÂMETROS NAS FUNÇÕES

// Funções com parâmetros em JavaScript são funções que recebem um ou mais valores como entrada para executar uma operação específica. Esses parâmetros são usados dentro do corpo da função para realizar cálculos, operações ou para tomar decisões lógicas.

// EXEMPLO

function testParam(a, b) {
    let sumTest = a + b;
    return sumTest
}

let testResult = testParam(4, 5);
console.log (testResult); // Output = 9
// OU 
console.log (testParam(7, 14)); // Output = 21

// EXEMPLO 2

function calcCircleArea(radius) {
    const pi = 3.1415;
    const circArea = pi * (radius * radius);
    return circArea
}
let testResult2 = calcCircleArea(5);
console.log(testResult2); // Output = 78.533333

// MÚLTIPLOS PARÂMETROS

// Uma função em JavaScript pode receber múltiplos parâmetros simplesmente especificando-os entre os parênteses na declaração da função. Os parâmetros são separados por vírgulas e podem ser de qualquer tipo de dado.

function calcTriangleArea(base, height) {
    const triangleArea = (base * height) / 2;
    console.log(`A base é igual a ${base}, e a altura é igual a ${height}`);
    return triangleArea;
}
console.log(`Logo, a area total é ${calcTriangleArea (5, 10)}`); // Output = 25

// ATVIDADES - FUNÇÕES COM PARÂMETROS

console.log("Atividade 1");
function positiveOrNegative(number) {
    if( number > 0) {
        return "P"
    } else if(isNaN(Number(number))) {
        return "NaN"
    } else {
        return "N"
    }
}
console.log(positiveOrNegative(0)); // Output = N
console.log(positiveOrNegative(1)); // Output = P
console.log(positiveOrNegative(-1)); // Output = N
console.log(positiveOrNegative("Olá")); // Output = NaN

console.log("Atividade 2");
function howManyDigits(number) {
    return `Este número possui ${Math.abs(number).toString().length} Dígito(s)`
}
console.log(howManyDigits(9)); // Output = 1 Dígito
console.log(howManyDigits(-20)); // Output = 2 Dígitos
console.log(howManyDigits(38000)); // Output = 5 Dígitos

console.log("Atividade 3");
function sumParam(a, b) {
    if(!isNaN(Number(a)) && !isNaN(Number(b)) && a > b) {
        return a + b
    } else if (isNaN(Number(a)) || isNaN(Number(b))) {
        return "Um dos valores não é um número válido";
    } else {
        return "O primeiro número não é maior que o segundo"
    }
}
console.log(sumParam(3, 5)); // Output = else
console.log(sumParam(5, 3)); // Output = 8
console.log(sumParam("a", 3)); // Output = else if

console.log("Atividade 4");
function twoWords(word, letter) {
    if(typeof word === 'string' && typeof letter === 'string' && word.charAt(0).toLowerCase() === letter.charAt(0).toLowerCase()) {
        return true
    } else {
        return false
    }
}
console.log(twoWords("Antro", "Marco")); // Output = false
console.log(twoWords("Jack", "Jones")); // Output = true

console.log("Atividade 5");
const date = new Date();
const getHours = date.getHours();

function supportTime (supportHours) {
    console.log(`Agora são ${getHours} horas`);
    if(supportHours >= 11 && supportHours <= 23) {
        return "O /pergunta está em horário de funcionamento."
    } else {
        return "O /pergunta não está em horário de funcionamento."
    }
}
console.log(supportTime(getHours)); // Output = A depender da hora local

// REUTILIZANDO FUNÇÕES

// Como já vimos anteriormente, funções são blocos de código que possibilitam estruturar algoritmos e são muito comuns no dia a dia de quem utiliza Javascript para desenvolver aplicações. Hoje veremos como utilizar funções dentro de outros contextos.

// REUTILIZAÇÃO COM VALOR DE VARIÁVEL

function soma(a, b) {
    return a + b;
  }
  
  const myVariavel = soma;
  
console.log(myVariavel(4, 2));
// Saída: 6

// REUTILIZAÇÃO COM ESTRUTURAS CONDICIONANTES

function par(n) {
    if (n % 2 === 0) {
      return true;
    }
    return false;
  }

console.log(par(2));
// Saída: true

// REUTILIZANDO/EXECUTANDO DENTRO DE OUTRA FUNÇÃO

function nomesPares(etiqueta) {
    if (par(etiqueta.length)) {
      return "Verde";
    }
    return "Vermelha";
  }
  
console.log(nomesPares("Sabonete"));
// Saída: "Verde"
// Se o tamanho do nome dos produtos for par, você deverá utilizar a cor verde, se for ímpar, deverá utilizar a cor vermelha.

// ATIVIDADES - REUTILIZANDO FUNÇÕES

console.log("Exercício 1")
function sumTwo(a, b) {
    if(!isNaN(Number(a)) && !isNaN(Number(b))) {
        return a + b
    }
}

let isNumber = 0;
isNumber = sumTwo(10, 10) * 5;
console.log(isNumber);

console.log("Exercício 2");
function firstLetter(name, surname) {
    function fullName() {
    if(typeof name === 'string' && typeof surname === 'string') {
        return `As letras iniciais do meu nome completo são: ${name.charAt(0).toUpperCase()} e ${surname.charAt(0).toUpperCase()}`;
        }
    }
    return fullName();
}
console.log(firstLetter("Rafael", "Mendonça"));

console.log("Exercício 3");
function numberOfLetters(product) {
    function even(n) {
        if(n % 2 === 0) {
            return true
        }
    }
    function odd(n) {
        if(n % 2 !== 0) {
            return true
        }
    }
    if(typeof product === 'string') {
        if(even(product.length)) {
        return "O número de letras deste produto é par"
    } else if(odd(product.length)) {
        return "O número de letras deste produto é ímpar" 
    }
    }
}
console.log(numberOfLetters("Apple"));