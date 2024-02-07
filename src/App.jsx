import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './hooks/themeContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CartPopUp from './components/CartPopUp';
import Footer from './components/Footer';
import AccessibilityPage from './pages/AccessibilityPage';
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { darkMode, bgColorClass } = useContext(ThemeContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div data-bs-theme={darkMode ? 'dark' : 'light'} className={bgColorClass}>
      <Router>
        <Header toggleCart={toggleCart} />
        <CartPopUp isOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/books/:id' element={<BookPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/privacy' element={<PrivacyPage />} />
          <Route path='/terms' element={<TermsOfUsePage />} />
          <Route path='/accessibility' element={<AccessibilityPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
