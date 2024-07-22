import { createContext, useState } from "react";

export const FruitContext = createContext({});

export function FruitContextProvider({ children }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [fruitList, setFruitList] = useState([]);

   const addFruit = (fruit) => {
      const newFruit = { ...fruit, id: crypto.randomUUID() };
      setFruitList([...fruitList, newFruit]);
   };

   const removeFruit = (fruitId) => {
    const newFruitList = fruitList.filter(fruit => fruit.id !== fruitId);
    setFruitList(newFruitList);
}

	return( 
  <FruitContext.Provider 
  value={
    { 
      name, 
      setName, 
      price, 
      setPrice, 
      fruitList, 
      setFruitList, 
      addFruit, 
      removeFruit 
    }
  }
  >
    { children }
  </FruitContext.Provider>
  )
}
