// Para a construção de uma modal, o próprio HTML nos disponibiliza a tag dialog. Com ela é possível criar modais de maneira muito mais rápida, pois a própria tag possui atributos que conversam com o Javascript. Possibilitando interações entre eles de uma maneira muito mais eficiente e descomplicada.

// Um modal é um elemento da página que só irá aparecer quando ocorrer um evento que peça para ele aparecer em tela. Quase como se fosse um 'pop-up'. 

// O comportamento padrão da tag dialog é esconder o conteúdo que está dentro dela até que ela possua o atributo open. A partir do momento que ela possuir este atributo, a modal será renderizada.

// Pois bem, agora no nosso arquivo JS vamos iniciar criando uma função chamada handleModal e a partir dela, vamos capturar o botão criado no html, através da função document.querySelector.

function handleModal() {
    const button = document.querySelector("#showMessage")
// Após isso, vamos criar uma variável chamada modalContainer que vai capturar o elemento que tenha o id #modalContainer, ou seja, a nossa tag dialog.
    const modalContainer = document.querySelector("#modalController")
// Agora vamos adicionar um evento de click no botão capturado anteriormente. Este evento vai monitorar a ação de clique no botão. Quando isso acontecer, vamos executar a função showModal() que, por padrão, já está presente no elemento dialog.
    button.addEventListener("click", () => {
        modalContainer.showModal()
        closeModal()
    })
}

// Agora, basta executar nossa função, para que ela insira o evento nos elementos após a renderização da página.

// A partir de agora, toda vez que clicarmos no botão, Mostrar mensagem a modal aparecerá, mostrando os conteúdos que estavam escondidos anteriormente. Você pode perceber que não conseguimos clicar fora dos elementos da modal, pois todo o conteúdo que está na tag dialog está a frente do conteúdo principal da página. Dessa forma, obrigando o usuário a interagir com a modal.

// Agora que nossa modal já está criada, precisamos incrementar algumas coisas para que ela realmente fique funcional. Por exemplo, como o usuário consegue fechar a modal sem pressionar a tecla esc?

// Agora no arquivo js, vamos criar uma função chamada também de closeModal. Nessa função vamos capturar o botão de fechamento da modal e também o próprio elemento dialog que usamos para mostrar a modal.

function closeModal() {
    const button = document.querySelector("#closeModal")
    const modalContainer = document.querySelector("#modalController")
// Feito isso, vamos então adicionar o evento de click no botão de fechamento da modal. Para que toda vez que o usuário clicar neste botão a modal será fechada. Para isso acontecer, devemos chamar o método close() que é um método padrão da tag dialog também.
    button.addEventListener("click", () => {
        modalContainer.close()
      })
}

handleModal()

// Porém, ao invés de executarmos a função closeModal() quando a página for renderizada, isso deve acontecer dentro do evento de click do botão usado para abrir a modal. Mas por quê? Simplesmente queremos adicionar o evento de fechar a modal, após ela ser aberta.