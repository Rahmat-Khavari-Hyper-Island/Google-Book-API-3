import { createContext, useState, useEffect } from 'react';

export const CartContext2 = createContext();

const CartProvider2 = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart with data from local storage, or an empty array if not available
    const storedCart = localStorage.getItem('cart');
    try {
      const parsedCart = JSON.parse(storedCart);
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error('Error parsing cart from local storage:', error);
      return [];
    }
  });

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (id, title, price) => {
    // Check if the item is already in the cart
    const item = cart.find((item) => item.id === id);

    if (item) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      const newItem = { id, title, price, quantity: 1 }; // Add title here
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext2.Provider value={{ cart, addItem }}>
      {children}
    </CartContext2.Provider>
  );
};

export default CartProvider2;
