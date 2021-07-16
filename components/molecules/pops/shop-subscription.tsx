
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









const ShopSubscriptionPop = (user) => {
  return (
    <Popover placement="top" closeOnBlur={true}>
      <PopoverTrigger>
        <Button
          
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          + Try allb Mall
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ margin: 0, offset: 0, padding: 0 }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Start Listning Subscription</PopoverHeader>
        <PopoverBody>
          {/* <RegisterShopForm/> */}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ShopSubscriptionPop;
