import React, { useState } from 'react';
import data from './../data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(data);
  const [searchedProduct, setSearchedProduct] = useState('');

  let searchResult = null;
  if (searchedProduct !== '') {
    searchResult = data.filter((product) => {
      return product.name.toLowerCase().includes(searchedProduct.toLowerCase());
    });
  } else {
    searchResult = products;
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchResult={searchResult}
        setProducts={setProducts}
        searchedProduct={searchedProduct}
        setSearchedProduct={setSearchedProduct}
      />
      <ProductsTable products={searchResult} setProducts={setProducts} />
    </div>
  );
};

export default ProductsPage;
