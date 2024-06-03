/* Desenvolva seu código aqui... */

function signupModal() {
    const signup = document.querySelector('.form__register-link')
    const modalController = document.querySelector('#dialog__container')

    signup.addEventListener("click", (event) => {
        event.preventDefault()

        modalController.showModal()
        closeModal()

        event.stopPropagation()
    })
}

function closeModal() {
    const closeButton = document.querySelector("#closeModal")
    const modalContainer = document.querySelector("#dialog__container")

    closeButton.addEventListener("click", (event) => {
        event.preventDefault()

        modalContainer.close()
      })
}

signupModal()