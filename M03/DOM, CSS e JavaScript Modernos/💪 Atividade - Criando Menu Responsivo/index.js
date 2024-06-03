const burgerButton = document.querySelector('.button__menu--burger')
const hiddenList = document.querySelector('.header__list--shortcuts')
const hiddenNav = document.querySelector('.header__nav--container')
const hiddenProfile = document.querySelector('.div__profile')
const hiddenSearch = document.querySelector('.nav__input--search')
const hiddenIcon = document.querySelector('.div__icon')

burgerButton.addEventListener('click', function(event) {
    event.preventDefault()
    event.stopPropagation()
    
    hiddenList.classList.toggle('menu')
    hiddenNav.classList.toggle('menu')
    hiddenProfile.classList.toggle('bar')
    hiddenSearch.classList.toggle('bar')
    hiddenIcon.classList.toggle('bar')
})