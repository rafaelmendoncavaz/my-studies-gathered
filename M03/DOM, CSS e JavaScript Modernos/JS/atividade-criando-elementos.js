const products = [
    {
      name: "Camiseta",
      price: 29.99,
    },
    {
      name: "Calça Jeans",
      price: 59.99,
    },
    {
      name: "Sapatos",
      price: 59.99,
    },
    {
      name: "Vestido",
      price: 89.99,
    },
    {
      name: "Chapéu",
      price: 19.99,
    },
  ];


// Agora que já sabemos como criar elementos HTML pelo JavaScript, vamos começar referenciando o elemento "pai" que já temos no arquivo, para que possamos depois inserir os elementos "filhos". No caso do nosso exemplo de produtos, nossa tag "pai" será a <ul>, pois a lista é única e não muda - o que precisa ser criado dinamicamente são os itens da lista.

const ul = document.querySelector('ul')

// Com nossa lista referenciada, podemos criar os itens de lista.

const li = document.createElement('li')

// Dentro do item de lista, temos três elementos: um título de nível 3 para o nome do produto, um parágrafo para o preço do produto, e um botão de adicionar ao carrinho.

const productName = document.createElement('h3')
const productPrice = document.createElement('p')
const addToCartButton = document.createElement('button')

// Nossos elementos estão criados, porém ainda estão vazios. Vamos preenchê-los com as informações do primeiro item do nosso array de produtos.

productName.innerText = products[0].name
productPrice.innerText = products[0].price
addToCartButton.innerText = "Adicionar ao carrinho"

// Agora precisamos definir a hierarquia dos elementos. O título, o parágrafo e o botão são "filhos" do item de lista, e o item de lista é "filho" da lista.

li.appendChild(productName)
li.appendChild(productPrice)
li.appendChild(addToCartButton)
ul.appendChild(li)

// Criamos a estrutura HTML para renderizar os produtos, porém apenas o primeiro da lista está sendo renderizado. Vamos deixar essa criação dinâmica inserindo toda essa lógica dentro de um loop.

for (let i = 0; i < products.length; i++) {
    const listItem = document.createElement('li')
 
    const productName = document.createElement('h3')
    const productPrice = document.createElement('p')
    const addToCartButton = document.createElement('button')
 
    productName.innerText = products[i].name
    productPrice.innerText = products[i].price
    addToCartButton.innerText = "Adicionar ao carrinho"
 
    li.appendChild(productName)
    li.appendChild(productPrice)
    li.appendChild(addToCartButton)
    ul.appendChild(li)
}

// Dessa forma, a cada volta do loop estão sendo criados todos os elementos HTML necessários. A quantidade de voltas que o loop dá é a quantidade de produtos presentes no array, então basta atualizar o array que os produtos são automaticamente renderizados na tela.