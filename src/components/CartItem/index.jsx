import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { Container } from './styles';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <Container>
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <div className="header-row">
          <h4>{item.name}</h4>
          <button 
            className="remove" 
            onClick={() => removeItem(item.id)}
            aria-label="Remover item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
        </div>
        
        <div className="price-row">
          <span className="price">{formatCurrency(item.price * item.quantity)}</span>
          <div className="controls">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Diminuir quantidade"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
