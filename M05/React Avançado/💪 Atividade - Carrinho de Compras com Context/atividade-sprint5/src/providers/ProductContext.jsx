import { app } from "../services/api";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await app.get("/products");
                setProductList(data);
            } catch (error) {
                console.error("Error fetching data!", error);
            }
        }
        getProducts();
    }, [])

    return(
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    )
}