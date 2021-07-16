
import {
  AlertIcon,
  Avatar,
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
import { Accessories } from "../../../assets/icons/icons/Accessories";
import { AlertDotIcon } from "../../../assets/icons/icons/AlertDotIcon";
import { ShoppingBag } from "../../../assets/icons/icons/ShoppingBag";
import { UserIcon } from "../../../assets/icons/icons/UserIcon";
import ViewIcons from "../../../assets/icons/inedx";
import { useUser } from "../../../hooks/nav";
import { UPDATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME } from "../../../redux/slices/shop/shop.types";

import { ImageUploadForm } from "../../forms/user/profile-image";




const ProfilePicture = (user) => {
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
          + Profile Picture
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ margin: 0, offset: 0, padding: 0 }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Choose Image</PopoverHeader>
        <PopoverBody>
          <ImageUploadForm user={user} />
        </PopoverBody>


        {/* <AlertDotIcon/> */}
        {/* <ShoppingBag/> */}
        <UserIcon/>
        {/* <ViewIcons/> */}
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePicture;
