import React, { useState } from 'react';

const ProductList = () => {
  const [filter, setFilter] = useState('');
  const productList = [
    ' Apple',
    'Banana',
    'Mango',
    'Orange',
    'Coconut',
    'Another Product',
    'React Product',
    'Awesome Product',
  ];

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = productList.filter((product) =>
    product.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Filter by name"
      />
      <ul>
        {filteredProducts.map((product) => (
          <li >{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
