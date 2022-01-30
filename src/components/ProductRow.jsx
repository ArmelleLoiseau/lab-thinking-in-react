import React from 'react';

const ProductRow = ({product}) => {
 
  return (
    <tr>
      {product.inStock ? <td style={{color: "black"}}>{product.name}</td> : <td style={{color: "red"}}>{product.name}</td>}
      <td>{product.price}</td>
    </tr>
);
};

export default ProductRow;
