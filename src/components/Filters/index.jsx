import { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';
import { useDebounce } from '../../hooks/useDebounce';
import { Container } from './styles';

export default function Filters({ filters, setFilters }) {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(filters['name:contains'] || '');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((err) => console.error('Erro ao buscar categorias', err));
  }, []);

  // Sincroniza a busca com debounce para o estado pai de filtros
  useEffect(() => {
    if (debouncedSearchTerm !== filters['name:contains']) {
      setFilters((prev) => ({ ...prev, 'name:contains': debouncedSearchTerm }));
    }
  }, [debouncedSearchTerm, filters['name:contains'], setFilters]);

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({ ...prev, _sort: value }));
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilters({ 'name:contains': '', category: '', _sort: '' });
  };

  const hasActiveFilters = filters['name:contains'] || filters.category || filters._sort;

  return (
    <Container>
      <div className="search-wrapper">
        <input 
          type="text" 
          placeholder="Buscar produtos por nome..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="controls-group">
        <select value={filters.category || ''} onChange={handleCategoryChange} aria-label="Filtrar por categoria">
          <option value="">Todas as categorias</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <select 
          value={filters._sort || ''} 
          onChange={handleSortChange}
          aria-label="Ordenar por"
        >
          <option value="">Ordenar por</option>
          <option value="price">Menor preço</option>
          <option value="-price">Maior preço</option>
          <option value="-rating">Mais avaliados</option>
        </select>

        {hasActiveFilters && (
          <button className="clear-btn" onClick={handleClearFilters}>
            Limpar filtros
          </button>
        )}
      </div>
    </Container>
  );
}
