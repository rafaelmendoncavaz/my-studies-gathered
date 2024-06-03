// ATRIBUTOS BOOLEANOS

// 1. BOOLEANOS SÃO ATRIBUTOS QUE SÓ PODEM POSSUIR VALOR 'VERDADEIRO' OU 'FALSO'
let x = 5;
let y = 3;
let z = 5;
console.log(x === 5); // Retorno = true;
console.log(x === y); // Retorno = false;

// João e Maria querem ir a um Bar para maiores de idade
let idadeJoao = 22;
let idadeMaria = 15;
let joaoPodeEntrar = idadeJoao > 18;
let mariaPodeEntrar = idadeMaria > 18;
console.log(joaoPodeEntrar); // Retorno = true;
console.log(mariaPodeEntrar); // Retorno = false;

// TRUTHY & FALSY

// São valores que são considerados verdadeiros ou falsos quando avaliados em um contexto booleano, mas que não necessariamente representa 'true' ou 'false', mas é considerado quando usado

// FALSY
false;
undefined;
null;
"";
0;
NaN;

let emptyString = ""
console.log(emptyString == false); // Retorno = true, pois é 'verdade' que a string vazia é 'falsy'

// OPERADORES DE COMPARAÇÃO

// 1. == -> Retorna 'true' quando os operandos/conteúdos são iguais
4 == 4 // Retorno = true;
4 == '4' // Retorno = true;

// 2. != -> Retorna 'true' quando os operandos/conteúdos não são iguais
4 != 5 // Retorno = true;
4 != '4' // Retorno = false;

// 3. === -> Retorna 'true' quando os operandos/conteúdos são iguais e do mesmo tipo
4 === 4 // Retorno = true;
4 === '4' // Retorno = false;

// 4. !== -> Retorna 'true' quando os operandos/conteúdos não são iguais e/ou não sejam dos mesmo tipo;
4 !== 4 // Retorno = false;
4 !== 5 // Retorno = true;
4 !== '4' // Retorno = true;
4 !== '5' // Retorno = true;

// 5. > -> Retorna 'true' quando o operando/conteúdo da 'esquerda' for MAIOR que o da 'direita'
5 > 4 // Retorno = true;
5 > 6 // Retorno = false

// 6. < -> Retorna 'true' quando o operando/conteúdo da 'esquerda' for MENOR que o da 'direita'
4 < 5 // Retorno = true;
5 < 4 // Retorno = false;

// 7. >= & <= -> Retorna 'true' quando, RESPECTIVAMENTE, o operando/conteúdo da 'esquerda' for MAIOR/IGUAL ao, ou, MENOR/IGUAL ao conteúdo da 'direita'
4 >= 4 // Retorno = true;
4 >= 5 // Retorno = false;
4 <= 4 // Retorno = true;
4 <= 5 // Retorno = true;