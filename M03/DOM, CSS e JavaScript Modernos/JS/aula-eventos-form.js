const form = document.querySelector('.form__container')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const inputName = document.querySelector('.input__box--text')
    const inputPet = document.querySelector('.input__box--select')

    // método value captura a informação dada nos inputs
    console.log(inputName.value)
    console.log(inputPet.value)
})