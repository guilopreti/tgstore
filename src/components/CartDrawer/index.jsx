import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import CartItem from '../CartItem';
import EmptyState from '../EmptyState';
import { Overlay, Container } from './styles';
import { toast } from 'react-toastify';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    clearCart();
    toast.success('Pedido finalizado com sucesso!');
    onClose();
  };

  const handleClearCart = () => {
    clearCart();
    toast.info('Carrinho esvaziado.');
  };

  // Renderiza o drawer mesmo fechado, apenas com opacidade e transform escondidos 
  // para permitir a animação de deslizar suavemente.
  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Container $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2>Carrinho</h2>
          <button className="close-btn" onClick={onClose} aria-label="Fechar carrinho">
            &times;
          </button>
        </div>
        
        <div className="drawer-body">
          {items.length === 0 ? (
            <div style={{ marginTop: '2rem' }}>
              <EmptyState 
                title="Seu carrinho está vazio" 
                description="Adicione produtos para finalizar a compra." 
              />
            </div>
          ) : (
            items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer-footer">
            <div className="total-row">
              <span>Total</span>
              <strong>{formatCurrency(totalPrice)}</strong>
            </div>
            <div className="footer-actions">
              <button className="checkout" onClick={handleCheckout}>
                Finalizar pedido
              </button>
              <button className="clear" onClick={handleClearCart}>
                Limpar carrinho
              </button>
            </div>
          </div>
        )}
      </Container>
    </Overlay>
  );
}
