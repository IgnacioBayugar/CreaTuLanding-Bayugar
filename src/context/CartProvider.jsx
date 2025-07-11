import { useState } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(prod => prod.id === item.id);
      if (existing) {
        return prevCart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  const cartTotal = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;