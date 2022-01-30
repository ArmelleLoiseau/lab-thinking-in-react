import React from 'react';
import ProductRow from './ProductRow';

const ProductsTable = ({ products, setProducts }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <ProductRow key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
