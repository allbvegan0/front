
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import {AddAddressForm} from "../../forms/user/addressForm";







const AddressPop = (user) => {
  return (
    <Popover placement="bottom" closeOnBlur={true}>
      <PopoverTrigger>
        <Button
          disabled={!!!user.user.emailVerified}
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          + Add Address
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ margin: 0, offset: 0, padding: 0 }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Add Address</PopoverHeader>
        <PopoverBody>
          <AddAddressForm/>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AddressPop;
