import { createContext, useState, useEffect } from 'react';
export const CartContext2 = createContext();

const CartProvider2 = ({ children }) => {
  const [cart, setCart] = useState([]);

  const additem = (id) => {
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { id, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  console.log(cart);

  return (
    <CartContext2.Provider value={{ additem }}>
      {children}
    </CartContext2.Provider>
  );
};

export default CartProvider2;
