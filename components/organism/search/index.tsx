import React from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";

const SearchInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Select
        placeholder="Select resource"
        h="2.75rem"
        width="-moz-max-content"
        m={8}
        justifySelf="center"
        background="grey.500"
      >
        <option value="oxygen">Oxygen</option>
        <option value="covedshelter">Covid Shelter</option>
        <option value="medicine">Medicine</option>
      </Select>

      <InputGroup mx={4} width={["sm", "md", "lg", "lg"]}>
        <Input pr="3.5rem" type={"search"} placeholder="Enter search" />
        <InputRightElement width="6.5rem" m={1}>
          <Button h="1.75rem" size="lg" onClick={handleClick}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default SearchInput;
