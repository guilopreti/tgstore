import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import CartDrawer from '../CartDrawer';
import { Container, Logo, CartButton } from './styles';

export default function Header() {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Container>
        <Logo to="/">tgstore</Logo>
        
        <nav>
          <CartButton onClick={() => setIsCartOpen(true)} aria-label="Abrir carrinho">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </CartButton>
        </nav>
      </Container>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
