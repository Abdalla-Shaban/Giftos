import { createContext, useState } from "react";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState();
  const removeProduct = (product) => {
    return setCartItems(cartItems.filter((item) => item.id !== product.id));
  };
  const incrementQuantity = (product) => {
    return setQuantity((product.quantity += 1));
  };
  const decrementQuantity = (product) => {
    return setQuantity(product.quantity > 1 ? (product.quantity -= 1) : null);
  };
  const addProductToCart = (product) => {
    const addedProduct = cartItems.find((item) => item.id === product.id);
    if (addedProduct) {
      incrementQuantity(product);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantity,
        addProductToCart,
        incrementQuantity,
        decrementQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
