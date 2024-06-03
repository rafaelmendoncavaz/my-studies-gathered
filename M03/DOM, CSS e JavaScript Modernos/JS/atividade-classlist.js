// 1. Inicie coletando todas as div's que possuam a classe block

function changeStyle() {
//   construa aqui a sua lógica
    const divs = document.querySelectorAll('.block')

    for(let i = 0; i < divs.length; i++) {
        const div = divs[i]
        div.classList.toggle('circle')
    }
    const li = document.querySelectorAll('li')

    for(let i = 0; i < li.length; i++) {
        const item = li[i]
        item.classList.toggle('itemCard')
    }
    const spans = document.querySelectorAll('span')
    const paragraphs = document.querySelectorAll('p')

    for(let i = 0; i < spans.length; i++) {
        const span = spans[i]
        const p = paragraphs[i]
        const online = span.classList.toggle('online')
        online ? (
            span.classList.remove('offline'),
            span.classList.add('online'),
            p.innerText = 'online'
        ) : (
            span.classList.remove('online'),
            span.classList.add('offline'),
            p.innerText = 'offline'
        )
    }
}