import { useContext } from "react"
import { CartContext } from "../../../providers/CartContext"


export const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <li>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <span>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
            <button onClick={() => addToCart(product)}>Adicionar</button>
        </li>
    )
}