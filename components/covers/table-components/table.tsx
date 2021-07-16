import PropTypes from "prop-types";
import { ProductCategoryRow } from "./header-row";
import { ProductRow } from "./row";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
export const ProductTable = (props) => {
  const { products, inStockOnly, filterText, filterCategory, filterIngredient, filterBenifits, filterPrice } = props;
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (
      product.name.indexOf(filterText) === -1
      // product.location.indexOf(filterText) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        ></ProductCategoryRow>
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <Table size="lg" width={["300px", "lg", "xs", "xs"]} px="3">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Location</Th>
          <Th>Contact</Th>
        </Tr>
      </Thead>
      <Tbody>{rows}</Tbody>
    </Table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
};
