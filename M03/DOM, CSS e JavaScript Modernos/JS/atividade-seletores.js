/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

const ingredients = document.getElementById('ingredients')
console.log(ingredients)

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

const title = document.getElementsByTagName('h1')
console.log(title)

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/

const classes = document.getElementsByClassName('recipe')
console.log(classes)

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

const toBlue = document.querySelectorAll('h2')
toBlue.forEach(element => {
    element.style.color = "blue"
})
/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

const toRed = document.querySelectorAll('input')
toRed.forEach(element => {
    element.style.borderColor = "red"
})
