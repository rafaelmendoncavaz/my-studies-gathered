// NO ELSE RETURN & TIPOS PRIMITIVOS

// O no-else-return é uma TÉCNICA usada na programação que tem como objetivo tornar o código mais legível, permitindo a eliminação de else desnecessários em nossos projetos.

function isPositive(number) {
    if (number > 0) {
      return true;
      console.log('Esse console nunca será mostrado');
    } else {
      return false;
      console.log('Esse console nunca será mostrado');
    }
  
    console.log('Esse console nunca será mostrado');
}
  
console.log(isPositive(2));
// Saída: true

// Além de retornar um valor, o comando return finaliza a função, impedindo a execução de qualquer código subsequente. Analisando um pouco a função anterior

// E é aqui que a técnica no-else-return entra em ação. Como o comando return finaliza qualquer função, caso a condição seja satisfeita, a função será finalizada. Portanto, podemos refatorar a função anterior para um código mais simples e conciso, como mostrado abaixo:

function isNumber(number) {
    if (number > 0) {
      return true;
    } 
  
    return false;
}
  
console.log(isNumber(2));
// Saída: true

// TIPOS PRIMITIVOS
console.log("Tipos Primitivos")

// Em JavaScript, os métodos são funções que realizam operações, tratam dados e muitas vezes simplificam a maneira como obtemos resultados. Eles são uma parte fundamental da linguagem e podem ser usados para executar ações específicas em dados.

// Existem vários tipos de métodos nativos disponíveis em JavaScript que podem ajudar no desenvolvimento de projetos. Alguns métodos são usados para manipulação de strings, enquanto outros são usados para trabalhar com números, arrays, objetos entre outros. A escolha do método certo dependerá do tipo de problema que estamos tentando resolver e do tipo de dado que estamos trabalhando.

// EXEMPLOS:

let phrase = "Estou estudando JavaScript, e estou gostando muito de JavaScript"
console.log(phrase);

phrase = phrase.replace("JavaScript", "HTML")
// ou replaceAll para substituir todas as palavras que se repetem na frase
console.log(phrase);

phrase = phrase.startsWith('Est', 0); // Checa se o valor começa com 'Est' no índice 0

let number = 10.0039487
console.log(number);
number = number.toFixed(3); // Reduz a leitura das casas decimais e transforma em string
console.log(number); // Output = 10.003
console.log(Number.isInteger(number)); // Checa se é um número inteiro ou não e retorna true/false

number = parseFloat(number); // Transforma a string em número decimal
console.log(number);

number = parseInt(number); // Transforma o valor/string em número inteiro
console.log(number);

// 💪 Atividade - Utilizando Métodos

console.log("Atividade 1");
function changeablePhrase(phrase, oldWord, newWord) {
    let newPhrase = phrase
    for(let i = 0; i < phrase.length; i++) {
        if(phrase.startsWith(oldWord, [i])) {
            newPhrase = phrase.replace(oldWord, newWord)
            phrase = newPhrase
        }
    }
    return newPhrase
}
console.log(changeablePhrase("I am a man of principles, and I must seek my principles", "principles", "Fortune"))

console.log("Atividade 2");
function finalGrade(grade1, grade2, grade3) {
    let gpa = ((grade1 + grade2 + grade3) / 3).toFixed(1);
    return `A média do aluno é <${parseFloat(gpa)}>`
}
console.log(finalGrade(7.41, 8.35, 9.97))

console.log("Atividade 3");
function totalAmount(unitValue, quantity) {
    let checkOut = (unitValue * quantity)
    if (quantity >= 5 && quantity < 10) {
        checkOut *= 0.9
    } else if (quantity >= 10) {
        checkOut *= 0.8
    } 
    return `O valor da compra é $${parseFloat(checkOut.toFixed(2))}`
}
console.log(totalAmount(4.272, 10))