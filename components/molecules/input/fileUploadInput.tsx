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

export const UploadFile = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl id="file">
        <Flex justify="space-between">
          <FormLabel>Upload File</FormLabel>
        </Flex>
        <InputGroup>

          <Input
            ref={mergeRef}
            name="file"
            type="file"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

UploadFile.displayName = "UploadFile";
