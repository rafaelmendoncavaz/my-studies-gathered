// Um evento é uma ação ou um movimento que acontece na página. Os eventos acontecem a todo momento. 

// Os eventos permitem que você responda a interações do usuário, como cliques do mouse, pressionamentos de teclas, movimentos do mouse outros eventos relacionados à interação do usuário com uma página da web.

const button = document.querySelector('button')
const p = document.querySelector('p')

let counter = 0
// Este é o comando para 'interceptar' o evento: addEventListener
// o segundo comando é uma função 'callback', que irá executar toda a vez que o evento ocorrer
button.addEventListener('click', function (event) {
    event.preventDefault()
    event.stopPropagation()
    counter++
    p.innerText = counter
    console.log('Clicou no botão')
    console.log('target -> ', event.target)
    console.log('currentTarget -> ', event.currentTarget)
})

// Quais são os tipos de eventos?

// Existem vários tipos de eventos disponíveis em JavaScript, incluindo eventos de mouse (como cliques e movimentos), eventos de teclado (como pressionamentos de teclas), eventos de formulário (como envio de formulário), eventos de carregamento da página (como load e DOMContentLoaded), eventos de temporizador (como setTimeout e setInterval), e muitos outros:

// Os mais comuns são os eventos de mouse, como o click, que é disparado quando um elemento é clicado, o dbclick (do inglês double click), quando ocorre um clique duplo, ou mouseover, quando o mouse passa sobre um elemento.

// Eventos de foco, como o focus, que ocorre quando o elemento recebe foco (quando você clica num campo de um formulário para começar a digitar), ou o blur, que ocorre quando o elemento perde o foco, entre outros.

// Eventos de formulário, como o submit, que acontece quando o formulário é enviado.

// Eventos de input, como o input (sim, esse é o nome do evento), que é disparado sempre que o usuário faz alguma modificação no valor de um campo, seja ele um input, select, ou textarea.

// Eventos de teclado, como o keydown, que é disparado sempre que uma tecla é pressionada. Ou o keyup, que é disparado depois que a tecla pressionada, for solta/liberada.

// Eventos de carregamento de página, como o DOMContentLoaded, que é disparado quando o documento é completamente carregado, ou o unload quando uma página é fechada.

// 📘 Aula - Bubbling e Capturing

// Quando um evento é acionado, nem sempre ele acontece imediatamente após ser acionado. Existem duas fases que determinam quando o evento será tratado de fato. Essas fases nós chamamos de capturing ou fase de captura e bubbling ou fase de borbulhamento.

// Na fase de capturing, o navegador começa verificando se existe algum handler para o evento ocorrido a partir do root da página, ou seja, pelo <html>, e assim vai verificando todos os filhos imediatos até chegar no elemento onde ocorreu o evento.

// Na fase de bubbling, acontece o contrário. O navegador começa verificando a partir do elemento clicado, e vai 'subindo', e verificando o pai imediato de cada elemento, até chegar ao root da página, ou seja, o <html>.

// 📘 Aula - Propriedades do Objeto Evento

// target - referencia ao elemento no qual o evento iniciou

// currentTarget - Identifica o elemento no qual o evento está/destino atual

// 📘 Aula - Métodos do Objeto Evento

// preventDefault() - Interrompe o comportamento padrão do browser. Faz com que algo que seria executado normalmente, não seja

// stopPropagation() - Interrompe a propagação dos eventos do mesmo tipo do evento de origem na fase de 'bubbling' ou 'capturing'.

const body = document.querySelector('body')

body.addEventListener('click', function(event) {
    console.log('clicou no body')
    counter--
    p.innerText = counter
    console.log('target -> ',event.target)
    console.log('currentTarget -> ',event.currentTarget)
}, false)