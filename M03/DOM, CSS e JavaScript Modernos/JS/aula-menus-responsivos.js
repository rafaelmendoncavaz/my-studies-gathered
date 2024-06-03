// Com JavaScript, você pode adicionar interatividade ao menu de navegação, como animações de transição suaves e suporte para toque em dispositivos móveis. Alguns frameworks responsivos, como o Bootstrap, já incluem menus responsivos pré-projetados que você pode personalizar para suas necessidades.
// Existem muitos exemplos de menus responsivos em uso na web hoje. Aqui estão alguns exemplos de técnicas de menu responsivas comuns:
    // Menus de navegação colapsáveis que se escondem e exibem ao clicar em um botão de menu.
    // Menus de hambúrguer, que exibem um ícone de hambúrguer que, quando clicado, expande para mostrar o menu de navegação.
    // Menus de sobreposição, que exibem o menu de navegação em uma sobreposição em toda a tela quando clicados.

const menuButton = document.querySelector(".menu__button")
const menu = document.querySelector(".menu__list")

menuButton.addEventListener("click", function () {
  menu.classList.toggle("show")
  if (menuButton.innerText === "Menu") {
    menuButton.innerText = "X"
  } else {
    menuButton.innerText = "Menu"
  }
})