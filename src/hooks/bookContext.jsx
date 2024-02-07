import React, { createContext, useEffect, useState } from 'react';
export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooksByCategory = async (searchInput, category) => {
    try {
      const apiKey = 'AIzaSyA6MiaAOYSh1yvAfsgDoM7s5GWGmdll8Q0';
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}subject:${category}&maxResults=40&filter=ebooks&printType=books&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch book data');
      }
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooksByCategory('', 'fantasy');
  }, []);

  return (
    <BookContext.Provider value={{ books, fetchBooksByCategory }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookProvider;
