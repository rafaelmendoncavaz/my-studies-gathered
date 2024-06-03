// OPERADORES LÓGICOS

// Os operadores lógicos em JavaScript são importantes porque atráves da junção de duas ou mais expressões, eles permitem a criação de estruturas condicionais complexas.

// Os operadores lógicos em JavaScript são usados para juntar expressões e determinar se elas são verdadeiras (true) ou falsas (false)

const falseVar = false;
const trueVar = true;

// && (AND)-> Retorna 'true' caso TODAS as operações sejam VERDADEIRAS. 
console.log(falseVar && trueVar); // Retorno é 'false'

// || (OR)-> Retorna 'true' caso UMA das operações sejam VERDADEIRAS.
console.log(falseVar || trueVar); // Retorno é 'true'

// ! (NOT)-> Retorna a NEGAÇÃO/OPOSO da operação. Se o resultado é VERDADEIRO, retorna 'false', e se o resultado é FALSO, retorna 'true'.
console.log(!falseVar); // Retorno é 'true';
console.log(!trueVar); // Retorno é 'false';

