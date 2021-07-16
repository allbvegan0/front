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

export const TitleField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl id="title">
        <Flex justify="space-between"></Flex>
        <InputGroup>
          <Input
            ref={mergeRef}
            name="title"
            type="text"
            placeholder="enter title"
            autoComplete="title"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

TitleField.displayName = "TitleField";
