// Nas aulas passadas, aprendemos como criar estilos por meio do DOM. Mas, percebe que o nosso Javascript fica com responsabilidade de estilizar?

// Então para manter uma melhor organização, vamos criar nossos estilos no CSS, e acessar os estilos por meio do DOM, sem a necessidade de criá-los dentro do nosso código JS.


// E agora, no aquivo Javascript, vamos capturar o parágrafo e criar uma função que adiciona a classe que criamos no CSS, da seguinte forma:

const addClass = () => {
    const paragraph = document.querySelector('p')
    const result = paragraph.classList.toggle('paragraph-black')
    paragraph.innerText = result ? "Classe Adicionada" : "Classe Removida"
}

// Como o toggle retorna um booleano de acordo com a existência da classe no elemento (remove a classe e retorna false, ou adiciona a classe e retorna true), podemos também alterar o texto do botão de acordo com o retorno do toggle desta maneira

// Acessamos o parágrafo, armazenamos ele em uma variável, e em seguida acessamos a propriedade classList para usar o método add, onde passamos como parâmetro a classe que criamos no CSS. Agora, quando a função addClassToParagraph for chamada, a classe paragraph-black será adicionada ao parágrafo.

// Com lógica...

// Caso a classe já exista no parágrafo, removemos, caso não, adicionamos. Para fazer isso, vamos utilizar tanto o método add(), quanto o método remove(), e para avaliar se o parágrafo já possui a classe, vamos utilizar o método contains(), que retorna um booleano.

