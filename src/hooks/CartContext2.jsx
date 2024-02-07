import { createContext, useState, useEffect } from 'react';
export const CartContext2 = createContext();

const CartProvider2 = ({ children }) => {
  const [cart, setCart] = useState([]);
  const additem = () => {
    console.log('hello');
  };

  return (
    <CartContext2.Provider value={{ additem }}>
      {children}
    </CartContext2.Provider>
  );
};

export default CartProvider2;
