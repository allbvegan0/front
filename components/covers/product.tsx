import PropTypes from "prop-types";
import React, { useState } from "react";
import { data } from "../organism/feed/products/data";
import { DATA } from "../rasa/watch/apiCombined";
import { SearchBar } from "./table-components/searchbar";
import { ProductTable } from "./table-components/table";

export const FilterableProductTable = (props) => {
  const { inStockOnly, filterText, products } = props;
  const [inStock, handleStocking] = useState(inStockOnly);
  const [filter, handleFilter] = useState(filterText);

  const handleTextChange = (e) => {
    handleFilter(e);
  };
  const handleInStockChange = (e) => {
    handleStocking(e);
  };

  // console.log(DATA)

  return (
    <>
      <SearchBar
        filterText={filter}
        inStockOnly={inStock}
        onFilterTextChange={(e) => handleTextChange(e)}
        onInStockChange={(e) => handleInStockChange(e)}
      />
      <ProductTable
        products={products}
        filterText={filter}
        inStockOnly={inStock}
      />
    </>
  );
};

FilterableProductTable.propTypes = {
  filterText: PropTypes.string,
  inSockOnly: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.object),
  onFilterTextChange: PropTypes.func,
  onInStockChange: PropTypes.func,
};

FilterableProductTable.defaultProps = {
  filterText: "",
  inStockOnly: false,
};

export default FilterableProductTable;
