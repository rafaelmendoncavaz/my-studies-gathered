import { Cart } from "../../components/Cart";
import { ProductList } from "../../components/ProductList";
import { CartProvider } from "../../providers/CartContext";
import { ProductProvider } from "../../providers/ProductContext";

export const HomePage = () => {
   return (
      <main>
         <ProductProvider>
            <CartProvider>
               <ProductList />
               <Cart />
            </CartProvider>
         </ProductProvider>

      </main>
   );
};
