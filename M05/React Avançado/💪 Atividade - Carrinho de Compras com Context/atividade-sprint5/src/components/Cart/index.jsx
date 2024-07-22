import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

export const Cart = () => {
   const { cartList, total, removeFromCart } = useContext(CartContext);

   return (
      <div>
         <ul>
            {cartList.map((product) => (
               <li key={product.id}>
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                  <button onClick={() => removeFromCart(product.id)}>Remover</button>
               </li>
            ))}
         </ul>
         <p>Total: {total}</p>
      </div>
   );
};
