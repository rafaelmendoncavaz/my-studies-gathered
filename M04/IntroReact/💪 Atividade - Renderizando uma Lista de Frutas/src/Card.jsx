export function Card({fruit}) {
    return (
        <li>
            <h3>
            Fruta: {fruit.name}
            </h3>
            <p>
            Cor: {fruit.category}
            </p>
            <p>
            Preço: {fruit.price}
            </p>
        </li>
    )
}