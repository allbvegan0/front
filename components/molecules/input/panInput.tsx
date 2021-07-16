import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  useMergeRefs,
  useColorModeValue as mode,
  InputLeftAddon,
} from "@chakra-ui/react";
import * as React from "react";

export const PANField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl >
        {/* <Flex justify="space-between">
          <FormLabel>PAN Number</FormLabel>
        </Flex> */}
        <InputGroup>

          <Input
            ref={mergeRef}
            name="pan"
            type="text"
            placeholder="PAN number"
            autoComplete="pan"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

PANField.displayName = "PANField";
