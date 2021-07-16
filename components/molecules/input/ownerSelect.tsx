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
  Stack,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import * as React from "react";

export const OwnerSelectField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const [value, setValue] = React.useState("1")
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    return (
      <FormControl id="phone">
        <Flex justify="space-between">
          <FormLabel>Select Owner Type</FormLabel>
        </Flex>
        <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">Individual</Radio>
        <Radio value="2">Company</Radio>
      </Stack>
    </RadioGroup>
      </FormControl>
    );
  }
);

OwnerSelectField.displayName = "OwnerSelectField";
