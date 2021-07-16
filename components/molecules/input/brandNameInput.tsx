import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  useMergeRefs,
  InputLeftAddon,
} from "@chakra-ui/react";
import * as React from "react";

export const BrandNameField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl >
        {/* <Flex justify="space-between">
          <FormLabel>Brand Name</FormLabel>
        </Flex> */}
        <InputGroup>

          <Input
            ref={mergeRef}
            name="brand-name"
            type="text"
            placeholder="Brand Name"
            autoComplete="brand-name"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

BrandNameField.displayName = "BrandNameField";
