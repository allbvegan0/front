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
  Center,
  Text
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import * as React from "react";

export const PackageTypeSelectField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {

    const [value, setValue] = React.useState("1")
    const [x, setX] = React.useState("0")


    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    React.useEffect(()=>{

      switch(value){
        case "1":
          setX("₹ 2")
          break;
        case "2":
          setX
          ("₹ 499")
          break;
          case "3":
            setX("₹ 4999")
            break;
            case "4":
              setX("call 9811720270")
              break;
              default:
                return setX("0")
  
      }
    },[value,x])

    return (
      <FormControl id="phone">
        <Flex justify="space-between">
          <FormLabel>Select Subscription Type</FormLabel>
        </Flex>
        <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">Freemium</Radio>
        <Radio value="2">Basic</Radio>

        <Radio value="3">Pro</Radio>
        {/* <Radio value="4">Enterprise</Radio> */}

      </Stack>
    </RadioGroup>
    <Center>
      <Text fontSize={59}>{x}</Text>
    </Center>
    
      </FormControl>
    );
  }
);

PackageTypeSelectField.displayName = "PackageTypeSelectField";
