import { Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationPasswordField } from "../../molecules/input/registerPassword";
interface IFormInput {
  new_passowrd: string;
  confirm_new_password: string;
}

const schema = yup.object().shape({
  new_password: yup.string().required().min(8).max(30),
  confirm_new_password: yup.string().required().min(8).max(30),
});

export const ResetThroughLinkForm = () => {
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
        <FormControl id="new_password">
          <FormLabel>New </FormLabel>
          <Controller
            name="new_passowrd"
            control={control}
            defaultValue=""
            render={({ field }) => <RegistrationPasswordField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.new_passowrd?.message}</p>
        </FormControl>
        <FormControl id="confirm_new_password">
          <FormLabel>Confirm </FormLabel>
          <Controller
            name="confirm_new_password"
            control={control}
            defaultValue=""
            render={({ field }) => <RegistrationPasswordField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.confirm_new_password?.message}</p>
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Reset Link 
        </Button>
      </Stack>
    </form>
  );
};
