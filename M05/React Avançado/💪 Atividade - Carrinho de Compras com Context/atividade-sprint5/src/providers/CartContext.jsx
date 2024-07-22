import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const total = cartList.reduce((prevValue, product) => {
        return prevValue + product.price
    }, 0)

    const addToCart = (addingProduct) => {
        if(!cartList.some(product => product.id === addingProduct.id)){
            setCartList([addingProduct, ...cartList]);
        } else {
            alert("Produto já adicionado no carrinho")
        }
    }

    const removeFromCart = (removingId) => {
        const newCartList = cartList.filter(product => product.id !== removingId);
        setCartList(newCartList);
    }

    return(
        <CartContext.Provider value={{ cartList, total, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}