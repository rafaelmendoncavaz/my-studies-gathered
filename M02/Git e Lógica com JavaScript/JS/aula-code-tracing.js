// CODE TRACING: ALGORÍTMOS

// Existem diversas maneiras de debugar (depurar) seus algoritimos, e hoje falaremos sobre o debug manual ou Manual Code Tracing. Entre os desenvolvedores brasileiros esta prática é mais conhecida como Teste de Mesa. 

// Erros de lógica comuns

// undefined
// null
// loop infinito

// Como executar um Code Tracing (Teste de Mesa)

// Passo > Linha > Variável > Output
// Passo: Local do seu código
// Linha: Linha da sua variável
// Variável: A suas variáveis
// Output: Saídas do código

// Exemplo:

const valor1 = 1;
const valor2 = 0;
let soma = 0;

if (valor1 != 1) {
  soma = valor1 + valor2;
  console.log(soma);
} else {
  console.log("Erro");
}

// Passo (etapa) // Linha (linha) // valor1 (var) // valor2 (var) //soma (Output)

// 2º Momento
// No segundo momento passamos para a execução da linha 1 no passo 1, e neste momento do código é declarado e inicializado a variável valor1. As demais variáveis ainda não foram inicializadas, então não precisa realizar anotações em suas colunas. 

// Passo: Declaração de variável
// Linha: 21
// Valor1: 1

// 3º Momento
// No terceiro momento declaramos e inicializamos a variável valor2. A variável soma ainda não foi declarada, então não precisamos efetuar anotações na coluna. A variável valor1 se manteve igual, então não precisamos mudar nada. 

// Passo: Declaração de variável
// Linha: 21
// Valor1: 1

// Passo: Declaração de variável
// Linha: 22
// Valor1: 1
// Valor2: 0

// 4º Momento
// No quarto momento declaramos a variável soma e a inicializamos. Repetimos os valores das demais variáveis. 

// Passo: Declaração de variável
// Linha: 21
// Valor1: 1

// Passo: Declaração de variável
// Linha: 22
// Valor1: 1
// Valor2: 0

// Passo: Declaração de variável
// Linha: 23
// Valor1: 1
// Valor2: 0
// Soma: 0

// 5º Momento
// No quinto momento entramos no teste do bloco if. Testamos se o valor1 é diferente de 1 e concluímos que não, pois valor1 é exatamente 1.
// O bloco if é ignorado e pulamos para instrução else. 

// Passo: Declaração de variável
// Linha: 21
// Valor1: 1

// Passo: Declaração de variável
// Linha: 22
// Valor1: 1
// Valor2: 0

// Passo: Declaração de variável
// Linha: 23
// Valor1: 1
// Valor2: 0
// Soma: 0

// Passo: Teste Condicional (False)
// Linha: 24
// Valor1: 1
// Valor2: 0
// Soma: 0

// 6º Momento
// No sexto momento realizamos a impressão do valor do console.log() do bloco else. 

// Passo: Declaração de variável
// Linha: 21
// Valor1: 1

// Passo: Declaração de variável
// Linha: 22
// Valor1: 1
// Valor2: 0

// Passo: Declaração de variável
// Linha: 23
// Valor1: 1
// Valor2: 0
// Soma: 0

// Passo: Teste Condicional (False)
// Linha: 24
// Valor1: 1
// Valor2: 0
// Soma: 0

// Passo: Execução do bloco else (Erro)
// Linha: 25
// Valor1: 
// Valor2: 
// Soma: 
// Output: Erro

// FERRAMENTAS DE DEBUGGING

// devTools (F12, CTRL + Shift + i)
// Unity test: escreva testes de unidade para partes específicas do seu código. Isso permite verificar se funções individuais funcionam conforme o esperado.
// Console: é uma ferramenta valiosa para depuração, sendo utilizado em conjunto com as ferramentas do desenvolvedor para averiguar os testes de unidade criados e distribuídos ao longo do código.

// console.log()
// Esse método é usado para registrar mensagens informativas no console. É uma das formas mais comuns de depurar o código, permitindo que você visualize o valor das variáveis e mensagens de registro.
console.log("Teste/Valor")

// console.table()
// Esse método é usado para imprimir os valores em formato de tabela. É muito útil quando utilizado para imprimir valores armazenas em variáveis mais complexas, como arrays e objetos.
const arr = [1, 2, 3, 4]
const obj = {
    escola: 'Kenzie',
    semana: 4,
    conteudo: 'javascript'
}
console.table(arr)
console.table(obj)

// console.error()
// Já o método console.error é usado para exibir mensagens de erro no console. Normalmente, o texto é exibido em vermelho, destacando mensagens de erro. Esse método pode ser usado para rastrear erros lógicos em seu código.

console.error('Issue found')