import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

export function useProducts(filters = {}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProducts(filters)
      .then(({ data }) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [JSON.stringify(filters)]); // eslint-disable-line react-hooks/exhaustive-deps

  return { products, loading, error };
}
