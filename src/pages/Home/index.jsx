import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';
import SkeletonCard from '../../components/SkeletonCard';
import EmptyState from '../../components/EmptyState';
import Filters from '../../components/Filters';
import { Container, Grid } from './styles';

export default function Home() {
  const [filters, setFilters] = useState({
    'name:contains': '',
    category: '',
    _sort: ''
  });

  // Limpa chaves vazias para não mandar query params não utilizados para a API
  const activeFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== '')
  );

  const { products, loading, error } = useProducts(activeFilters);

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
      
      <Filters filters={filters} setFilters={setFilters} />

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
          description="Tente ajustar seus filtros para encontrar o que procura." 
        />
      )}
    </Container>
  );
}
