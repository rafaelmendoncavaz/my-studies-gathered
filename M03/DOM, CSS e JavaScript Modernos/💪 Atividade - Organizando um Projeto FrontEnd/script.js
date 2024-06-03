// const data = [
//     {
//         name:'Caderno',
//         image:'./img/product.jpg',
//         price:'R$50,00',
//         off: 10
//     },
//     {
//         name:'Livro',
//         image:'./img/product.jpg',
//         price:'R$80,00',
//         off: 20
//     },{
//         name:'Apontador',
//         image:'./img/product.jpg',
//         price:'R$5,00',
//         off: 30
//     },{
//         name:'Lápis',
//         image:'./img/product.jpg',
//         price:'R$2,50',
//         off: 0
//     },{
//         name:'Tesoura',
//         image:'./img/product.jpg',
//         price:'R$6,00',
//         off: 10
//     },{
//         name:'Canetinhas',
//         image:'./img/product.jpg',
//         price:'R$15,00',
//         off: 50
//     },{
//         name:'Estojo',
//         image:'./img/product.jpg',
//         price:'R$25,00',
//         off: 0
//     },{
//         name:'Régua',
//         image:'./img/product.jpg',
//         price:'R$5,00',
//         off: 0
//     },{
//         name:'Mochila',
//         image:'./img/product.jpg',
//         price:'R$250,00',
//         off: 20
//     },{
//         name:'Giz de Cera',
//         image:'./img/product.jpg',
//         price:'R$18,00',
//         off: 80
//     },
// ]

// function headerRender(){
//     const header = document.querySelector('header')

//     const logo = document.createElement('h1')
//     const div = document.createElement('div')
//     const productsLink = document.createElement('a')
//     const footerLink = document.createElement('a')
    
//     logo.innerText = 'Papelaria'

//     div.className = 'links'
//     productsLink.innerText = 'Products'
//     productsLink.href = '#products'
//     footerLink.innerText = 'Footer'
//     footerLink.href = '#footer'

//     div.appendChild(productsLink)
//     div.appendChild(footerLink)
//     header.appendChild(logo)
//     header.appendChild(div)
// }

// function mainRender(){
//     const main = document.querySelector('main')

//     main.id = 'products'

//     for(let i = 0; i < data.length; i++){
//         const card = createCard(data[i])
//         main.appendChild(card)
//     }
// }

// function footerRender(){
//     const footer = document.querySelector('footer')

//     footer.id = 'footer'
//     footer.innerText = 'All rights reserved.'
// }

// function createCard(obj){
//     const div = document.createElement('div')
//     const title = document.createElement('h2')
//     const img = document.createElement('img')
//     const price = document.createElement('p')
//     const off = document.createElement('p')

//     div.className = 'card'
//     title.innerText = obj.name
//     img.src = obj.image
//     price.innerText = obj.price
//     off.innerText = `Sale ${obj.off}% off`

//     if(obj.off > 0){
//         off.className = 'saleOff'
//     }else{
//         off.className = 'saleNone'
//     }

//     div.append(title, img, price, off)

//     return div
// }

// headerRender()
// mainRender()
// footerRender()