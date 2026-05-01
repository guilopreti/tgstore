import { Overlay, Container } from './styles';

export default function CartDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2>Carrinho</h2>
          <button onClick={onClose} aria-label="Fechar carrinho">
            &times;
          </button>
        </div>
        
        <p className="empty-message">
          Seu carrinho está vazio no momento.
        </p>
      </Container>
    </Overlay>
  );
}
