import {
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputProps,
  useMergeRefs,
} from "@chakra-ui/react";
import * as React from "react";

export const EmailField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl id="email">
        <Flex justify="space-between">
          {/* <FormLabel>Email Address </FormLabel> */}
        </Flex>
        <InputGroup>
          <Input
            ref={mergeRef}
            name="email"
            type="email"
            placeholder="enter email"
            autoComplete="username"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

EmailField.displayName = "EmailField";
