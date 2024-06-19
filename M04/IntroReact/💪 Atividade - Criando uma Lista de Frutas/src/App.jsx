import { useState } from 'react'


function App() {
  

  const fruitsList = [
    {
       name: "Morango",
       price: 15,
       category: "Frutas",
    },
    {
       name: "Uva",
       price: 23,
       category: "Frutas",
    },
    {
       name: "Banana",
       price: 23,
       category: "Frutas",
    },
    {
       name: "Beterraba",
       price: 5,
       category: "Legumes",
    },
  ]

  const [fruitList, setFruitList] = useState(fruitsList)
  const [view, setView] = useState('all')
  const [fruit, setFruit] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const totalPrice = fruitList.reduce((prevValue, currentValue) => {
    return (prevValue + currentValue.price)
  }, 0)

  const ShowLettuces = () => {
    return (
      <ul>
        {
          fruitList.filter(lettuce => lettuce.category === "Legumes").map((lettuces, index) => {
            return (
              <li key={index}>
                <h2>
                  {lettuces.name}
                </h2>
                <p>
                  {lettuces.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </p>
                <p>
                  {lettuces.category}
                </p>
              </li>
            )
          })
        }
      </ul>
      )
  }

  const ShowFruits = () => {
    return (
      <ul>
        {
          fruitList.filter(fruit => fruit.category === "Frutas").map((fruits, index) => {
            return (
              <li key={index}>
                  <h2>
                    {fruits.name}
                  </h2>
                  <p>
                    {fruits.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </p>
                  <p>
                    {fruits.category}
                  </p>
                </li>
              )
          })
        }
      </ul>
    )
  }

  const ShowList = () => {
    return (
      <ul>
        {
          fruitList.map((fruit, index) => {
            return (
              <li key={index}>
                <h2>
                  {fruit.name}
                </h2>
                <p>
                  {fruit.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </p>
                <p>
                  {fruit.category}
                </p>
              </li>
            )
          })
        }
      </ul>
    )
  }

  const addFruit = (event) => {
    event.preventDefault()

      setFruitList([...fruitList, {
        name: fruit,
        price: Number(price),
        category: category
      }])
      alert('Fruta Adicionada!')
    
    document.querySelector("#fruitForm").reset()

  }

  const renderComponents = () => {
    if (view === 'lettuce') {
      return <ShowLettuces />
    }
    if (view === 'fruits') {
      return <ShowFruits />
    }
    return <ShowList />
  }

  return (
    <>
      <div>
        {
          renderComponents()
        }
      </div>
      <div>
        <form id="fruitForm">
          <input type="text" onChange={(e) => setFruit(e.target.value)} name="fruit" id="fruitName" placeholder="Digite o nome da fruta..." />
          <input type="text" onChange={(e) => setPrice(e.target.value)} name="price" id="fruitPrice" placeholder="Digite o preço da fruta..." />
          <input type="text" onChange={(e) => setCategory(e.target.value)} name="category" id="fruitCategory" placeholder="Digite a categoria da fruta..." />
          <br></br>
          <button className="addButton" type="submit" onClick={addFruit}>Adicionar fruta</button>
        </form>
        <button onClick={() => setView('lettuce')}>Mostrar Legumes</button>
        <button onClick={() => setView('fruits')}>Mostrar Frutas</button>
        <button onClick={() => setView('all')}>Mostrar Lista</button>
        <h1>
          {totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </h1>
      </div>
    </>
  )
}

export default App
