import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { Container, CardBody, Footer, Price } from './styles';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Container onClick={handleCardClick}>
      <img src={product.image} alt={product.name} loading="lazy" />
      <CardBody>
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <Footer>
          <Price>{formatCurrency(product.price)}</Price>
          <button onClick={handleAddToCart} aria-label={`Adicionar ${product.name} ao carrinho`}>
            Adicionar
          </button>
        </Footer>
      </CardBody>
    </Container>
  );
}
