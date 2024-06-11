import { Card } from "./Card"

export function List({fruitList}) {
    return (
        <ul>
          {
            fruitList.map(fruits => {
              return (
                <Card fruit={fruits} key={fruits.id} />
              )
            })
          }
        </ul>
    )
}