import { useContext } from "react"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "../../providers/ProductContext";

export const ProductList = () => {
    const { productList } = useContext(ProductContext);

    return (
        <ul>
            {productList?.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}

        </ul>
    )
}