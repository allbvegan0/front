import { Checkbox } from "@chakra-ui/checkbox";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

export const SearchBar = (props) => {
  const { filterText, inStockOnly, onInStockChange, onFilterTextChange } =
    props;

  const handleTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };
  const handleInStockChange = (e) => {
    onInStockChange(e.target.checked);
  };
  return (
    <>
      <form>
        <Input
          type="text"
          placeholder="search"
          value={filterText}
          onChange={(e) => handleTextChange(e)}
        />

        <HStack w="100%" h="40px">
          <Checkbox
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => handleInStockChange(e)}
          />
          <Box>Only show products in stock</Box>
        </HStack>
      </form>
    </>
  );
};

SearchBar.propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  onInStockChange: PropTypes.func,
  onFilterTextChange: PropTypes.func,
};
