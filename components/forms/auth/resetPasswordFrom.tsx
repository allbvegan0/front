import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "../../molecules/input/passwordField";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationPasswordField } from "../../molecules/input/registerPassword";
interface IFormInput {
  old_passowrd: string;
  new_passowrd: string;
  confirm_new_password: string;
}

const schema = yup.object().shape({
  old_passowrd: yup.string().required().min(8).max(30),

  new_password: yup.string().required().min(8).max(30),
  confirm_new_password: yup.string().required().min(8).max(30),
});

export const ResetPasswordForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="old_password">
          <FormLabel>Old Password</FormLabel>
          <Controller
            name="old_passowrd"
            control={control}
            defaultValue=""
            render={({ field }) => <RegistrationPasswordField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.old_passowrd?.message}</p>
        </FormControl>
        <FormControl id="new_password">
          <FormLabel>New Password</FormLabel>
          <Controller
            name="new_passowrd"
            control={control}
            defaultValue=""
            render={({ field }) => <RegistrationPasswordField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.new_passowrd?.message}</p>
        </FormControl>
        <FormControl id="confirm_new_password">
          <FormLabel>Confirm New Password</FormLabel>
          <Controller
            name="confirm_new_password"
            control={control}
            defaultValue=""
            render={({ field }) => <RegistrationPasswordField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.confirm_new_password?.message}</p>
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Reset Password
        </Button>
      </Stack>
    </form>
  );
};
