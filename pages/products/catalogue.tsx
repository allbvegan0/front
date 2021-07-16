import { Stack } from "@chakra-ui/layout";
import React from "react";
import FilterableProductTable from "../../components/covers/product";
import { thought } from "../../data/data";

const Catalogue = () => {
  return (
    <Stack align="center">
      <FilterableProductTable products={thought} />;
    </Stack>
  );
};


export default Catalogue;
