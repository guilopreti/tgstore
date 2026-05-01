import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProductById } from '../../services/api';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import EmptyState from '../../components/EmptyState';
import { Container } from './styles';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProductById(id)
      .then(({ data }) => setProduct(data))
      .catch(() => setError('Produto não encontrado'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(q => q + 1);
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
    toast.success(`${quantity}x ${product.name} adicionado(s) ao carrinho!`, {
      autoClose: 2000,
    });
  };

  if (error) {
    return (
      <Container>
        <button className="back-button" onClick={handleBack}>
          &larr; Voltar
        </button>
        <EmptyState 
          title="Produto não encontrado" 
          description="O produto que você está procurando não existe ou foi removido." 
        />
      </Container>
    );
  }

  return (
    <Container>
      <button className="back-button" onClick={() => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Voltar para Home
      </button>

      {loading ? (
        <div className="product-content">
          <div className="skeleton-image" />
          <div className="info-container">
            <div className="skeleton-line text" style={{ width: '20%' }} />
            <div className="skeleton-line title" />
            <div className="skeleton-line price" />
            <div className="skeleton-line text" />
            <div className="skeleton-line text" />
            <div className="skeleton-line text-short" />
            <div className="skeleton-line button" />
          </div>
        </div>
      ) : product ? (
        <div className="product-content">
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="info-container">
            <span className="category">{product.category}</span>
            <h1>{product.name}</h1>
            <span className="price">{formatCurrency(product.price)}</span>
            <p className="description">{product.description}</p>
            
            <div className="action-area">
              <div className="quantity-selector">
                <button 
                  onClick={decreaseQuantity} 
                  disabled={quantity <= 1}
                  aria-label="Diminuir quantidade"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>
              
              <button className="add-button" onClick={handleAddToCart}>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Container>
  );
}
