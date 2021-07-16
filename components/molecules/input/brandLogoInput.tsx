import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  useMergeRefs,
} from "@chakra-ui/react";
import * as React from "react";

export const BrandLogoField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl >
        {/* <Flex justify="space-between">
          <FormLabel>Brand Logo</FormLabel>
        </Flex> */}
        <InputGroup>

          <Input
            ref={mergeRef}
            name="brand-logo"
            type="file"
            placeholder="Upload Brand Logo"
            autoComplete="brand-logo"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

BrandLogoField.displayName = "BrandLogoField";