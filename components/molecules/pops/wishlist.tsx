import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleUploadFile } from "../../../redux/thunk/file";

// import {MediaUR} from '../../../helpers/'

export const UPDATE_WISHLIST = gql`
  mutation uploadFile($file: Upload!) {
    updateWishList(file: $file) {
      wishes
    }
  }
`;



const ImageUploadForm = (user) => {
  const [wishes, selectWish] = useState([]);
  // const [uploaded, sU] = useState(false)
  const [mutate, { loading, error }] = useMutation(UPDATE_WISHLIST);
  const dispatch = useDispatch();
  useEffect(() => {
    let mount = true;
    if (mount) {
      if (wishes) {
        console.log(wishes);
        // _file: URL.createObjectURL(event.target.files[0])
      }
    }
    return () => {
      mount = false;
    };
  }, [wishes]);

  const upload = (data: any) => {

    mutate({
      variables: { wishes },
    })
      .then((v: any) => {
        console.log("r", v);
      })
      .catch((e) => {
        console.log("Error on mutation----->", e);
        // sU(false)
        // return false
      });
  };

  const { register, handleSubmit } = useForm();
  const ref = useRef(null);
  return (
    <form id="img" onSubmit={handleSubmit(upload)}>
      <Input
        required
        {...register("image", { required: true })}
        name="wish"
        type="text"
        onChange={(e) => {
          selectWish([...wishes, e.target.value]);
        }}
      />
      <Button type="submit">Change Profile Picture</Button>
    </form>
  );
};

const Wishlist = (user) => {
  return (
    <Popover placement="top" closeOnBlur={true} >
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
      <PopoverContent style={{ margin: 0 , offset: 0, padding: 0 }}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Choose Image</PopoverHeader>
        {/* <img src={`${MediaUR}/images/65/profile/65.png`}/> */}
        <PopoverBody>
          <ImageUploadForm user={user} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Wishlist;
