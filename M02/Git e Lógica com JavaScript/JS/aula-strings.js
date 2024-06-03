// AULA STRINGS
/*
Uma string é um tipo de dado em JavaScript que representa um texto. É uma sequência de caracteres que podem ser letras, números, símbolos, espaços, etc. Uma string pode ser delimitada por aspas simples (') ou aspas duplas ("), desde que sejam consistentes na abertura e fechamento da string.

Strings são imutáveis em Javascript, o que significa que uma vez que uma string é criada, seu conteúdo não pode ser alterado. No entanto, é possível manipular ou concatenar (combinar) strings para criar novas strings.

Além disso, existem diversas funções e métodos prontos para trabalhar com strings em JavaScript, como por exemplo: length (para retornar o comprimento da string), toUpperCase (para converter a string para letras maiúsculas), toLowerCase (para converter a string para letras minúsculas), substring (para extrair uma parte da string), etc.

Aqui estão alguns exemplos de uso das funções toUpperCase e toLowerCase em JavaScript:
*/
const nameIs = "Rafael Mendonça Vaz";
console.log (nameIs);
const uppercaseName = nameIs.toUpperCase();
console.log (uppercaseName);
const lowercaseName = nameIs.toLowerCase();
console.log(lowercaseName);
const substringName = nameIs.substring(7, 16);
console.log (substringName);

// CONCATENANDO STRINGS

/* 
Concatenar significa juntar ou unir duas ou mais strings em uma única string. Por exemplo, você pode ter duas strings "Olá" e "mundo" e concatená-las para formar a string "Olá mundo". Em programação, existem várias maneiras de concatenar strings, como usando o operador + ou o método concat. A concatenação é frequentemente usada para juntar diferentes partes de uma string para formar uma string mais complexa.

Aqui estão alguns exemplos de como fazer isso:
*/

const firstString = "Olá";
const secondString = "Mundo";
// CONCATENANDO COM O OPERADOR ( + )
const thirdString = firstString + " " + secondString + ", Me chamo " + nameIs;
console.log (thirdString);

// CONCATENANDO COM O MÉTODO ( CONCAT )
const fourthString = firstString.concat(" ", secondString, ", Me chamo ", nameIs);
console.log(fourthString);

// TEMPLATE STRINGS

/* 
As template strings são uma maneira de concatenar strings em JavaScript que oferecem mais recursos e facilidade de uso do que a concatenação convencional. Elas são definidas usando crases (``) ao invés de aspas simples ou duplas. Exemplo de como usar template strings:
*/

const ageIs = 27;
const cityIs = "Cascavel";

// Usando Template Strings com várias variáveis
const messageIs = `Olá, meu nome é ${nameIs} e tenho ${ageIs} anos. Atualmente moro em ${cityIs}`
console.log(messageIs);

/* 
Como você pode ver, ao usar template strings, é possível incluir variáveis diretamente na string, sem precisar concatená-las manualmente. As variáveis são incluídas dentro de chaves ${} e são avaliadas antes de serem inseridas na string final. Além disso, as template strings também permitem que você insira quebras de linha e outros caracteres especiais diretamente na string.
*/

// CONVERTENDO STRINGS PARA NÚMEROS

/* 
Em JavaScript, há duas maneiras principais de converter strings para números: parseInt e parseFloat. Aqui estão alguns exemplos de como usá-los:
*/

const number1 = "10";
const number2 = "20.5";
console.log(number1, typeof number1, number2, typeof number2);

const result1 = parseInt(number1);
console.log(result1, typeof result1);

const result2 = parseFloat(number2);
console.log(result2, typeof result2);

/* 
Em ambos os casos, o método retorna o valor numérico equivalente à string passada como parâmetro. Se a string não puder ser convertida em um número válido, ambos os métodos retornarão NaN (Not a Number). É importante verificar o resultado dessas conversões antes de usá-las em cálculos, para garantir que sejam válidas.
*/

// 💪 Atividade - Trabalhando com Strings

console.log("Atividade 1");
const firstName = "João";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log(fullName);

console.log("Atividade 2");
const hello = "Hello"
const world = "world"
const helloworld = hello.concat(world);
console.log(helloworld);

console.log("Atividade 3");
const decimal = "12.5";
const wholeNumber = parseInt(decimal);
console.log(wholeNumber, typeof wholeNumber);

console.log("Atividade 4");
const twelve = "12"
const numberTwelve = parseInt(twelve);
console.log(numberTwelve, typeof numberTwelve);

console.log("Atividade 5");
const three = "3"
console.log(twelve, three, typeof twelve, typeof three);
const numberThree = parseInt(three);
const fifteen = numberTwelve + numberThree;
console.log(fifteen, typeof fifteen);
