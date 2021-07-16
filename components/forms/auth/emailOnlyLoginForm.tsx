import { Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailField } from "../../molecules/input/emailInput";
import { useDispatch } from "react-redux";
import { handleGetEmailSession } from "../../../redux/thunk/auth";
interface IFormInput {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
});

export const EmailSessionForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const dispatch  = useDispatch() 
  const onSubmit = (data) => {
    console.log('click on Email link to reset password',data)
    dispatch(handleGetEmailSession({email: data.email}))
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

        <Button type="submit" colorScheme="pink" size="lg" fontSize="md">
          Login Via Email Link
        </Button>
      </Stack>
    </form>
  );
};
