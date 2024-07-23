import { app } from "../services/api";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query"

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {

    const { data: productList } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const { data } = await app.get("/products")
            return data
        }
    })

    return (
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    )
}