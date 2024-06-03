// 📘 Aula - Criando Elementos

// Para criar nossos elementos, vamos utilizar o método createElement() que está disponibilizado dentro do nosso objeto document. No método, vamos passar por parâmetro o nome da tag HTML que queremos criar. Dentro do arquivo index.js, criaremos os elementos e armazenaremos dentro de variáveis, da seguinte forma:

const article = document.createElement('article')
const articleTitle = document.createElement('h2')
const articleResume = document.createElement('p')
const articleButton = document.createElement('button')

// Definir conteúdo

// Para isso vamos acessar a propriedade innerText, de cada tag e atribuir o seu valor adequado em formato de string:

articleTitle.innerText = 'Como criar elementos HTML de forma dinâmica, utilizando Javascript'
articleResume.innerText = 'Nesse post vamos aprender como criar elementos utilizando o DOM'
articleButton.innerText = 'Acessar conteúdo'

// Hierarquia

// Definir a hierarquia, significa determinar qual tag será "filha" de qual. Por exemplo: a tag article deve ser filha da tag <body>, e as tags <h2>, <p> e <button> devem ser filhas da tag <article>. Para isso, utilizaremos o método de DOM appendChild:

// Dessa vez, a ordem de adição importa. Em nosso exemplo, precisamos que a primeira tag filha direta seja o <h2>, seguido do <p> e do <button> respectivamente.

article.appendChild(articleTitle)
article.appendChild(articleResume)
article.appendChild(articleButton)

const body = document.querySelector('body')

body.appendChild(article)