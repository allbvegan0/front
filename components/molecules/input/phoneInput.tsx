import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  useDisclosure,
  useMergeRefs,
  InputLeftAddon,
} from "@chakra-ui/react";
import * as React from "react";

export const PhoneField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl id="phone">
        <Flex justify="space-between">
          <FormLabel>Phone Number</FormLabel>
        </Flex>
        <InputGroup>
          <InputLeftAddon children="+91" />
          <Input
            ref={mergeRef}
            name="phone"
            type="tel"
            placeholder="phone number"
            autoComplete="phone"
            required
            {...props}
          />
        </InputGroup>
      </FormControl>
    );
  }
);

PhoneField.displayName = "PhoneField";
