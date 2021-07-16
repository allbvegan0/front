import PropTypes from "prop-types";
import React from "react";
import { Tr, Td, Badge } from "@chakra-ui/react";
export const ProductRow = (props) => {
  const { product } = props;
  const name = product.stocked ? (
    product.name
  ) : (
    <>
      <Badge style={{ color: "pink" }}>{product.name}</Badge>
    </>
  );

  const location = product.location ? (
    <Badge style={{ background: "green" }}>{product.location}</Badge>
  ) : (
    <>
      <Badge style={{ background: "purple.400" }}>not filles</Badge>
    </>
  );

  const contact = product.contact ? (
    <Badge style={{ background: "grey", color: "wheat" }}>
      {product.contact}
    </Badge>
  ) : (
    <>
      <Badge style={{ background: "grey.200", color:"white" }}>find one=found 1 & 2</Badge>
    </>
  );

  return (
    <>
      <Tr>
        <Td>{name}</Td>
        <Td>{product.price}</Td>
        <Td>{location}</Td>
        <Td>{contact}</Td>
      </Tr>
    </>
  );
};

ProductRow.propTypes = {
  product: PropTypes.object,
};
