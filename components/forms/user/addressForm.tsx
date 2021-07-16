import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { connect, ConnectedProps, useDispatch } from "react-redux";
import { handleAddUserAddresses } from "../../../redux/thunk/user";
import { useUser } from "../../../hooks/nav";
import { Address } from "../../../redux/slices/user/address";


interface IFormInput {
  street_address: string;
  line2_address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

const schema = yup.object().shape({
  street_address: yup.string().required().min(3).max(130),
  line2_address: yup.string().min(4).max(30),
  city: yup.string().required().min(3),
  state: yup.string().required().min(3).max(30),
  country: yup.string().required().min(4).max(30),
  zipcode: yup.string().required().min(5).max(10),
});


export const AddAddressForm = (props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const me = useUser()

  const onSubmit = (data:IFormInput) => {
    // data.preventDefault()
    console.log('address in form====>',data)
    const {street_address, line2_address,
      city,state,
      country,zipcode} = data

      dispatch(handleAddUserAddresses({
        address:{street_address, line2_address,
      city,state,
      country,zipcode}, email: me.email
       })),
        reset({
          street_address:'',
          line2_address:"",
          city:"",
          state:"",
          country:"",
          zipcode:""
        })

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="street_address">
          <Controller
            name="street_address"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder={"Enter Street Address"}/>}
          />
          <p style={{ color: "red" }}>{errors.street_address?.message}</p>
          </FormControl>
          <FormControl id="line2_address">
        <Controller
            name="line2_address"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder={"Enter District Details"}/>}
          />
          <p style={{ color: "red" }}>{errors.line2_address?.message}</p>
        </FormControl>
        <FormControl id="city">
        <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder={"Enter District Details"}/>}
          />
          <p style={{ color: "red" }}>{errors.city?.message}</p>
          </FormControl>
          <FormControl id="state">
        <Controller
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder={"Enter State"}/>}
          />
          <p style={{ color: "red" }}>{errors.state?.message}</p>
        </FormControl>
        <FormControl id="country">
        <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder={"Enter Country"}/>}
          />
          <p style={{ color: "red" }}>{errors.country?.message}</p>
        </FormControl>
        <FormControl id="zipcode">
        <Controller
            name="zipcode"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} placeholder={"Enter Zipcode"}/>}
          />
          <p style={{ color: "red" }}>{errors.zipcode?.message}</p>
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Add Address
        </Button>
      </Stack>
    </form>
  );
};
