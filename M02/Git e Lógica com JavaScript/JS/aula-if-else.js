// IF & ELSE

// O if-else em JavaScript é uma estrutura condicional que permite a execução de diferentes trechos de código com base em uma condição lógica. A sintaxe básica do if-else é:
// if (condicao) {
    "Código a ser executado se a condição for verdadeira"
//  } else {
    "Código a ser executado se a condição for falsa"
//  }

// EXEMPLO:
  // Suponhamos que José tenha ido ao mercado para comprar uma dúzia de ovos. Ele levou consigo R$ 8,50. Chegando ao mercado, José conseguirá comprar a dúzia de ovos apenas se o preço estiver abaixo ou igual a quantidade de dinheiro que ele levou. Senão, José terá que voltar pra casa para buscar mais dinheiro.

  let dinheiroDoJose = 8.50;
  let precoDaDuziaDeOvos = 10.20;
  
  // Condição é falsa (10.20 <= 8.50)
  if (precoDaDuziaDeOvos <= dinheiroDoJose) {
    // Este bloco não será executado
    console.log('José conseguirá comprar uma duzia de ovos!!');
  } else {
    // Este bloco será executado
    console.log('José terá que voltar até em casa buscar mais dinheiro!!');
  }

// Agora vamos atualizar as condições
console.log('Condição atualizada')

dinheiroDoJose = 12;

// Condição é verdadeira (10.20 <= 12)
if (precoDaDuziaDeOvos <= dinheiroDoJose){
  // Este bloco será executado
  console.log('José conseguirá comprar uma duzia de ovos!!');
} else {
  // Este bloco não será executado
  console.log('José terá que voltar até em casa buscar mais dinheiro!!');
}

// else if

// O else if em JavaScript é uma cláusula adicional ao comando if que permite especificar múltiplas condições para testar e executar diferentes blocos de código de acordo com o resultado. É usado como uma forma de encadear múltiplos testes if, evitando a necessidade de vários comandos if independentes.

let num = 15;

if (num > 10) {
    // valor verdadeiro a ser executado
  console.log("O número é maior que 10");
} else if (num < 10) {
    // valor não será executado
  console.log("O número é menor que 10");
} else {
    // valor não será executado
  console.log("O número é igual a 10");
}

// Três resultados em cima da variável 'num' foram testados, e aquele que atende a condição é o que recebe de retorno