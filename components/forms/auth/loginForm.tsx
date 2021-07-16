import { Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailField } from "../../molecules/input/emailInput";

import { useDispatch } from "react-redux";



import { PasswordField } from "../../molecules/input/passwordField";
import { handleGetAuthLogin } from "../../../redux/thunk/auth";
interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(30),
});



export const LoginForm = (props) => {
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

    const { email} = data
    console.log('email====>',email)
     dispatch(handleGetAuthLogin({...data}))
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <EmailField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </FormControl>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => <PasswordField {...field} />}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          allb SignIn
        </Button>
      </Stack>
    </form>
  );
};
