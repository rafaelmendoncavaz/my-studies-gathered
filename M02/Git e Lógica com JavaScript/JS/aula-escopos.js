// ESCOPOS

// O Escopo é a área em que determinado recurso pode ser acessado dentro do código. Em javascript, existem três tipos de escopo, sendo eles Escopo Global, Escopo de Bloco e Escopo de Função.

// ESCOPO GLOBAL

// Quando declaramos uma variável no escopo global, ela pode ser acessada em qualquer lugar do código, incluindo dentro de outras funções.

// variável sendo declarada no escopo global
let minhaVariavel = 'Estou no escopo global'

function primeiraFuncao(){
  console.log(minhaVariavel)
  function segundaFuncao(){
    console.log(minhaVariavel)
  }
  segundaFuncao()// Saída: Estou no escopo global
}

primeiraFuncao() // Saída: Estou no escopo global

// Observe que no código acima a segundaFuncao conseguiu acessar a minhaVariavel, pois ela foi declarada no escopo global antes da declaração das funções, ficando acessível para todas as partes do nosso código. 

// ESCOPO DE FUNÇÃO

// Quando é declarada uma variável ou função dentro de outra função, temos acesso as esses recursos apenas dentro da função em que foram declarados, ou seja, apenas no escopo da função.

function minhaFuncao() {
    // variável sendo declarada no escopo da minhaFuncao
    let minhaVariavel2 = 'Estou no escopo da minhaFuncao'
    // FUNÇÃO DENTRO DE OUTRA FUNÇÃO
    function outraFuncao() {
      console.log(minhaVariavel2)
    }
    outraFuncao() // Saída: Estou no escopo da minhaFuncao
    console.log(minhaVariavel2)
  }
  
  minhaFuncao() 
  // Saída: Estou no escopo da minhaFuncao
  //console.log(minhaVariavel2) 
  // Saída ReferenceError: minhaVariavel is not defined

// No trecho de código acima o retorno do último console.log é um erro, porque a minhaVariavel2 está sendo declarada dentro da minhaFuncao, sendo assim, a variável está no escopo da função, não podendo ser acessada de outros lugares do código. A outraFuncao consegue acessar a minhaVariavel2, pois a função foi declarada dentro da minhaFuncao, tendo acesso ao escopo dela.

// ESCOPO DE BLOCO

// O escopo de bloco é bem parecido com o escopo de função, porém ele é aplicável aos blocos de código {}. Quando declaramos uma variável usando os operadores let e const dentro de um bloco de código, só é possível acessar essa variável de dentro desse bloco.

const idade = 18
const temCNH = true

if (idade >= 18) {
  // variavel sendo declarada no escopo do bloco if
  let podeDirigir = true
  if (temCNH) {
    // a variavel pode ser acessada de dentro desse bloco de if
    // isso acontece porque esse bloco está dentro do escopo
    console.log(podeDirigir) // Saída: true
  }
}

//console.log(podeDirigir)
// Saída: ReferenceError: podeDirigir is not defined

// EXERCÍCIOS - DEBUGGANDO COM console.log()

console.log("Exercício 1");

function verificaNumero(num) {
    let str = '';
    
    if (num % 2 == 0) {
      str = 'par';
    } else {
      str = 'impar';
    }
    str += ', ';
  
    if (num > 0) { 
      str += 'positivo';
    } else {
      str += 'negativo';
    }
    str += ' e ';
  
    if (num === parseInt(num)) {
      str += 'não possui casas decimais';
    } else {
      str += 'possui casas decimais';
    }
    str = 'O numero ' + num + ' é ' + str;
  
    return str;
  }
  
  console.log(verificaNumero(-12));

console.log("Exercício 2");

let valor = 18;
let result = valor / 2;
console.log(result);

result = result / 3;
console.log(result);

let isPair = ( result == 3 );
console.log(isPair);

if (isPair) {
  result = result * 6;
} else {
  result = result * 12;
}

console.log(result);

console.log("Exercício 3");

function algarismosEmUmNumero(n){
    let str = `${n}`;
    let contagem = str.length;
    console.log(contagem);
  
    if (n != parseInt(n)) {
      console.log("Entrou aqui");
      contagem = contagem - 1;
    }
  
    console.log(contagem);
  
    return contagem;
  }
  algarismosEmUmNumero(3.141517);