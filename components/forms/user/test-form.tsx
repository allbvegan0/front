import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailField } from "../../molecules/input/emailInput";

import { useDispatch } from "react-redux";



import { PasswordField } from "../../molecules/input/passwordField";
import { handleGetAuthLogin } from "../../../redux/thunk/auth";
interface IFormInput {
  test: string;

}

const schema = yup.object().shape({
  test: yup.string().required()
});



export const TestForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    // data.preventDefault()


    console.log('email====>',data)

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="test">
          <FormLabel>Email address</FormLabel>
          <Controller
            name="test"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          <p style={{ color: "red" }}>{errors.test?.message}</p>
          </FormControl>


        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          allb SignIn
        </Button>
      </Stack>
    </form>
  );
};
