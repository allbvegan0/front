import React from "react";
import {
  Button,
  FormControl,
  Input,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

interface IFormInput {
  title: string;
  description: string;
  
}

const schema = yup.object().shape({

  title: yup.string().min(9).max(12),
  description: yup.string().min(8).max(30),

});


function TitleDescriptionForm(props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("Company");
  const onSubmit = (data) => {
    const { owner_type, gst, pan, title, brand_logo } = data;
    console.log("email", pan);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="6">

          <FormControl id="title">
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder={"Enter title"} />
              )}
            />
            <p style={{ color: "red" }}>{errors.title?.message}</p>
          </FormControl>

          <FormControl id="description">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea {...field} type="textarea" placeholder={"Enter Description"} />
              )}
            />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Create New Formula
          </Button>
        </Stack>
      </form>
    </>
  );
}

TitleDescriptionForm.propTypes = {};

export default TitleDescriptionForm;
