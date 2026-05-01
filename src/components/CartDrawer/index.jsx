import { Overlay, DrawerContainer, DrawerHeader, CloseButton, EmptyMessage } from './styles';

export default function CartDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <DrawerContainer onClick={(e) => e.stopPropagation()}>
        <DrawerHeader>
          <h2>Carrinho</h2>
          <CloseButton onClick={onClose} aria-label="Fechar carrinho">
            &times;
          </CloseButton>
        </DrawerHeader>
        
        <EmptyMessage>
          Seu carrinho está vazio no momento.
        </EmptyMessage>
      </DrawerContainer>
    </Overlay>
  );
}
