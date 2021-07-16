import {
  Flex,
  FormControl,
  InputProps,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  TextareaProps,
  useMergeRefs,
} from "@chakra-ui/react";
import * as React from "react";

export const ContentInput = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>((props, ref) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [resize, setResize] = React.useState("horizontal");

  const mergeRef = useMergeRefs(inputRef, ref);

  return (
    <FormControl id="content">
      <Flex justify="space-between"></Flex>
      {/* <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
          <Radio value="none">None</Radio>
        </Stack>
      </RadioGroup> */}
      <Textarea
        ref={mergeRef}
        placeholder="Here is a sample placeholder"
        size="sm"
        resize={"vertical"}
        {...props}
      />
    </FormControl>
  );
});
ContentInput.displayName = "ContentInput";
