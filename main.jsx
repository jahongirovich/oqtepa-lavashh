import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import Authorization from './components/Authorization.jsx'
import { useState } from 'react'

function Root() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleShowAbout = () => {
    setShowAbout(true);
  };

  const handleShowMenu = () => {
    setShowAbout(false);
    setShowBranches(false);
    setShowContacts(false);
  };

  const handleShowBranches = () => {
    setShowAbout(false);
    setShowBranches(true);
    setShowContacts(false);
  };

  const handleShowContacts = () => {
    setShowAbout(false);
    setShowBranches(false);
    setShowContacts(true);
  };

  const handleShowAuth = () => {
    setShowAuth(true);
  };

  return (
    <StrictMode>
      <div className="flex">
        <div className="flex-1">
          <Header 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            cartCount={cart.length} 
            onCartClick={() => setCartOpen(!cartOpen)} 
            onShowAbout={handleShowAbout} 
            onShowMenu={handleShowMenu} 
            onShowBranches={handleShowBranches} 
            onShowContacts={handleShowContacts} 
            onShowAuth={handleShowAuth} 
          />
          <Section 
            searchQuery={searchQuery} 
            addToCart={addToCart} 
            showAbout={showAbout} 
            showBranches={showBranches} 
            showContacts={showContacts} 
            onCloseAbout={() => setShowAbout(false)} 
          />
          <Footer />
        </div>
        {cartOpen && <Cart cart={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} onClose={() => setCartOpen(false)} />}
        <Authorization isOpen={showAuth} onClose={() => setShowAuth(false)} />
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(
  <Root />,
)
