import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BookProvider from './hooks/bookContext.jsx';
import ThemeProvider from './hooks/themeContext.jsx';
import CartProvider from './hooks/CartContext.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BookProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </BookProvider>
    </ThemeProvider>
  </React.StrictMode>
);
