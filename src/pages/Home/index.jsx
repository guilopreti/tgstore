import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';
import SkeletonCard from '../../components/SkeletonCard';
import EmptyState from '../../components/EmptyState';
import { Container, Grid } from './styles';

export default function Home() {
  const { products, loading, error } = useProducts();

  if (error) {
    return (
      <Container>
        <EmptyState 
          title="Ops! Ocorreu um erro." 
          description="Não foi possível carregar os produtos no momento. Tente novamente mais tarde." 
        />
      </Container>
    );
  }

  return (
    <Container>
      <h1>Nossos Produtos</h1>

      {loading ? (
        <Grid>
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </Grid>
      ) : products.length > 0 ? (
        <Grid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      ) : (
        <EmptyState 
          title="Nenhum produto encontrado" 
          description="Não temos produtos disponíveis no momento." 
        />
      )}
    </Container>
  );
}
