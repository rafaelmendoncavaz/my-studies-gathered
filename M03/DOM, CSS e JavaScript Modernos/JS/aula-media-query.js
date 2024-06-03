const textButton = ['Abrir', 'Fechar']
const button = document.querySelector('nav button')
button.addEventListener('click', (event) => {
    let toggleMenu = document.querySelector('nav ul').classList.toggle('menu__show--mobile')
    (toggleMenu) ? button.innerText =  textButton[1] : button.innerText = textButton[0]
    event.stopPropagation()
})

