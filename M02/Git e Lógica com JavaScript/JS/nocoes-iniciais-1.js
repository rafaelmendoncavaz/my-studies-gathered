let nomeDaVariavel = "Rafael";
// let é o jeito atual de inserir uma variavel em js (antigo var)
// o valor é modificável ao longo do código
// O nome atribuído deve ter especificidade p/ facilitar leitura
// valor da variável atribuído entre aspas

const nomeDaVariavel2 = 27;
// const é uma variável que o valor não pode ser modificada ao longo do código
// se inserido novo valor ao longo do código, dará erro a partir da nova inserção

console.log (nomeDaVariavel);
// Mostra no navegador a atualização e linha do valor da variável mencionada

nomeDaVariavel = "Ariadne"
// valor atualizado da variável nomedavariavel

console.log (nomeDaVariavel);
// Mostrará a nova atualização da variavel nomedavariavel no console

console.log (nomeDaVariavel2);
// Mostrará a variável de valor constante, nomeada nomedavariavel2

// Tipos de dados primitivos em JS

// 1. string
let exemploString = "Texto ou valor";
let aspasSimples = 'Ele disse estar "Tudo Bem"';
let aspasDuplas = "Queda d'água";

// 2. number
let numInteiros = 20;
let numFlutuantes = 1.76;

// 3. boolean
let verdadeiro = true;
let falso = false;

// 4. undefined
let indefinido = undefined;

// 5. null
let nulo = null;

// Tipos de operadores

// 1. Aritimeticos
let soma = 6 + 3;
let subtracao = 6 - 3;
let multiplicacao = 6 * 3;
let divisao = 6 / 3;
let modulo = 7 % 4;
// módulo é o que sobra do primeiro valor, dividido pelo segundo sequencialmente
let exponencial = 6 ** 3;


// 2. Comparação
console.log (10 == "10");
// Ex: O igual duplo (==) compara se o valor entre o número e a string são iguais
console.log (10 === "10");
// Ex: O igual triplo (===) compara se o tipo dos dados são iguais
console.log (10 != "10");
// Ex: != compara se o valor entre o número e a string são diferentes
console.log (10 !== "10");
// Ex: !== compara se o tipo dos dados são diferentes;
console.log (soma > 9);
// Ex: Compara se o valor da variavel soma é maior que 9;
console.log (soma >= 9);
// Ex: Compara se o valor da variavel soma é maior OU igual a 9;
console.log (subtracao < 3);
// Ex: Compara se o valor da variavel subtracao é menor que 3;
console.log (subtracao <= 3);
// Ex: Compara se o valor da variavel subtracao é menor OU igual a 3;

// Tipos de Lógica

// 1. Ou
console.log (true || true);
// Valida se um valor ou outro deu 'true'
console.log (true || false);
// Valida se um valor ou outro deu 'true', no caso, o lado esquerdo
console.log (false || false);
// Valida se um valor ou outro deu 'true', no caso, nenhum lado

// 2. E
console.log (true && true);
// Valida se ambos os valores dão 'true', no caso, sim
console.log (true && false);
// Valida se ambos os valores dão 'true', no caso, não
console.log (false & false);
// Valida se ambos os valores dão 'true', no caso, não

// 3. Negação
console.log (!false);
// Nega o valor que foi inserido, no caso, negando o 'false' resulta em 'true'
console.log (!true);
// Nega o valor que foi inserido, no caso, negando o 'true' resulta em 'false'

// Tipos de Condicionais

// 1. Se
if (true) {
    //Se o valor resultar em verdadeiro, comandos aqui dentro são seguidos
}
else {
    //Se o valor resultar em falso, comandos aqui dentro são seguidos
}
// Exemplo: 
const idade = 30;
if (idade >= 18) {
    console.log ("Maior de idade!");
}
else {
    console.log ("Menor de idade!")
}
// Exemplo 2:
const experiencia = true;

if (idade > 25 && experiencia === true) {
    console.log ("Contratado!");
}
else if (idade > 25 || experiencia === true) {
        console.log ("Avaliação!");
    }
else {
    console.log ("Não atende os requisitos!")
}
// Exemplo 2:
const peso = 70;
const altura = 1.78;
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log ("Abaixo do peso");
}
else if (imc >= 18.5 && imc < 25) {
    console.log ("Peso ideal")
}
else if (imc >= 25 && imc < 30) {
    console.log ("Sobrepeso");
}
else if (imc >= 30 && imc < 35) {
    console.log ("Obesidade Grau I");
}
else if (imc >= 35 && imc < 40) {
    console.log ("Obesidade Grau II")
}
else {
    console.log ("Obesidade Grau III")
}