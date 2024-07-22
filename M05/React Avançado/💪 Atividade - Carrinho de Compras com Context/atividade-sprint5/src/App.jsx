import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./providers/CartContext";

function App() {
   return (
      <>
         <CartProvider>
            <HomePage />
         </CartProvider>
      </>
   );
}

export default App;
