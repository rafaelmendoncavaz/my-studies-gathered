import { fruitList } from "./Fruit"
import { List } from "./List"

function App() {

  return (
    <>
      <List fruitList={fruitList}/>
    </>
  )
}

export default App

// O COMPONENTE 'List' ESTÁ UTILIZANDO O ARRAY IMPORTADO (fruitList) COMO PROP 

// O COMPONENTE 'List' RETORNA UMA <ul> ONDE EM SEU PARÂMETRO RECEBE A PROP E PERCORRE O ARRAY DE PARÂMETRO COM '.map' E PARA CADA ITEM ELE RETORNA O COMPONENTE 'Card'

// O COMPONENTE 'Card' RECEBE UM PARÂMETRO (fruit) E RETORNA UMA <li> CONTENDO fruit.name, fruit.category E fruit.price 

// NO COMPONENTE 'List', O COMPONENTE 'Card' RECEBE UMA PROP REFERENTE AO PARÂMETRO DO '.map' (fruits) E UMA KEY ÚNICA PASSADA PELO fruits.id E PARA CADA VEZ QUE PERCORRE O ARRAY, ELE RENDERIZA UM COMPONENTE 'Card'

// 1. 'List' recebe o array como prop (para sua função usar o array)
// 2. 'List' percorre o array recebido com '.map' e retorna o componente 'Card'
// 3. 'Card' recebe uma prop com o parâmetro do '.map' e 1 key única
// 4. 'Card' retorna uma <li> com informações do parâmetro do '.map'
// 5. Para cada item percorrido, 'List' retorna um 'Card'