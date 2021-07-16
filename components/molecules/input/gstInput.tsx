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

export const GSTField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl >
        {/* <Flex justify="space-between">
          <FormLabel>GST Number</FormLabel>
        </Flex> */}
        <InputGroup>

          <Input
            ref={mergeRef}
            name="gst"
            type="text"
            placeholder="GST number"
            autoComplete="gst"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

GSTField.displayName = "GSTField";
