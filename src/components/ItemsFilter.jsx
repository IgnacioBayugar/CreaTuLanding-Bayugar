import { useState, useEffect } from "react";

function ItemsFilter({ categories = [], onFilterChange, children }) {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (onFilterChange) onFilterChange(filter);
  }, [filter, onFilterChange]);

  return (
    <div>
      <select
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      {children}
    </div>
  );
}

export default ItemsFilter;