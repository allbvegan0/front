import PropTypes from "prop-types";
import { Tr, Th } from "@chakra-ui/react";

export const ProductCategoryRow = (props) => {
  const { category } = props;
  return (
    <>
      <Tr>
        <Th style={{ background: "green.500", width: "100%" }}>{category}</Th>
      </Tr>
    </>
  );
};

ProductCategoryRow.propTypes = {
  category: PropTypes.string,
};
// Quality Matters for Every Product.
//  And you are a product of time.
