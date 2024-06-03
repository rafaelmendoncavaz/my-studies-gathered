// 💠 JavaScript: Introdução ao DOM (Document Object Model)

// 📘 Aula - Introdução ao DOM 
// DOM é um acrônimo para Document Object Model (Modelo de Objeto de Documento, em português) e é uma interface de programação que representa a estrutura em árvore de um documento HTML como um conjunto de objetos que podem ser manipulados por códigos JavaScript.

// O DOM permite que os desenvolvedores possam acessar e modificar dinamicamente o conteúdo, a estrutura e o estilo da página, bem como adicionar ou remover elementos e interagir com o usuário.

const opcao = prompt("Digite SIM para modificar a cor:");

if (opcao === "SIM") {
  window.document.body.style = "background: #0ff";
}

// 📘 Aula - Seletores em DOM 

// Busca o primeiro elemento que foi passado como parâmetro
const div_1 = document.querySelector('div')

const div_3 = document.querySelectorAll('.box')
// Busca todos os elementos que possuem o parâmetro

div_1.style.backgroundColor = "black"

// Busca o elemento com o ID passado como parâmetro
const div_2 = document.getElementById('box_2')

div_2.style.borderStyle = "solid"
div_2.style.borderColor = "red"

// Busca todos os elementos no documento com a mesma tag < >
const boxes = document.getElementsByTagName('div')

// Busca todos os elementos que possuem a mesma classe 
const classes = document.getElementsByClassName('box')

