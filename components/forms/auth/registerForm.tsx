import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, FormControl, Input, Stack } from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationPasswordField } from "../../molecules/input/registerPassword";
import { PhoneField } from "../../molecules/input/phoneInput";
import { EmailField } from "../../molecules/input/emailInput";
import { getCsrfToken } from "next-auth/client";
import { useDispatch, useSelector } from "react-redux";
import { handleSetAuthRegister } from "../../../redux/thunk/auth";

import RegistrationWelcomeScreen from "../../../pages/screens/registration";


interface IFormInput {
  email: string;
  name: string;
  phone: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required().min(4).max(25),
  phone: yup.string().min(10).max(10).required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(30),
});



const RegisterForm = (props) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });



  const dispatch = useDispatch();
      // console.log(state)

  const onSubmit = (data: IFormInput) => {
    dispatch(handleSetAuthRegister({...data}))
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6" py="4">
        <FormControl id="name">
          {/* <FormLabel>Enter Name</FormLabel> */}

          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder={"Enter Name"}/>}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </FormControl>
        <FormControl id="email">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <EmailField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </FormControl>
        <FormControl id="phone">
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => <PhoneField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.phone?.message}</p>
        </FormControl>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => <RegistrationPasswordField {...field} />}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create my account
        </Button>
      </Stack>
    </form>
  );
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default RegisterForm;
