import React from 'react';

const SearchBar = ({searchResult, setProducts, searchedProduct, setSearchedProduct}) => {
  
  const handleSearch = (e) => {
    setSearchedProduct(e.target.value)
  }

  let inStock = null;
  const handleCheckbox = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
    inStock = searchResult.filter(p => {return p.inStock === true})
    setProducts(inStock)
    } else {
    console.log("unchecked")
    setProducts(searchResult)
    }
  }

  console.log(inStock)
  return <div>
    <h2>Search</h2>
    <input onChange={handleSearch} value={searchedProduct}></input>
    <input type="checkbox" onClick={handleCheckbox} id="checkbox"/>
    <label htmlFor="checkbox">only show products in stock</label>
  </div>;
};

export default SearchBar;
