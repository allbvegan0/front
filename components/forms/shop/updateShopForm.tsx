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
} from "@chakra-ui/react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

interface IFormInput {
  owner_type: string;
  company_name: string;
  individual_name: string;

  gst: string;
  pan: string;
  brand_name: string;
  company_address: string;
}

const schema = yup.object().shape({
  owner_type: yup.string(),
  company_name: yup.string().min(3).max(200),
  individual_name: yup.string().min(3).max(100),
  gst: yup.string().min(9).max(12),
  pan: yup.string().min(8).max(30),
  brand_name: yup.string().required().min(3).max(100),
});

const Gst_input = () => {
  return (
    <PinInput type="alphanumeric">
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};
function UpdateShopForm(props) {
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
    const { owner_type, gst, pan, brand_name, brand_logo } = data;
    console.log("email", pan);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="6">
          <FormControl id="owner_type">
            <Controller
              name="owner_type"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup {...field} onChange={setValue} value={value}>
                  <Stack direction="row">
                    <Radio value="Company">Company</Radio>
                    <Radio value="Individual">Individual</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
            <p style={{ color: "red" }}>{errors.owner_type?.message}</p>
          </FormControl>
          {value === "Company" ? (
            <FormControl id="company_name">
              <Controller
                name="company_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input {...field} placeholder={"Enter Company Name"} />
                )}
              />
              <p style={{ color: "red" }}>{errors.company_name?.message}</p>
            </FormControl>
          ) : (
            <FormControl id="individual_name">
              <Controller
                name="individual_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input {...field} placeholder={"Enter Individual Name"} />
                )}
              />
              <p style={{ color: "red" }}>{errors.individual_name?.message}</p>
            </FormControl>
          )}
{       value==="Company"?   <FormControl id="gst">
            <Controller
              name="gst"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder={"Enter gst"} />
              )}
            />
            <p style={{ color: "red" }}>{errors.gst?.message}</p>
          </FormControl>:
          <FormControl id="pan">
            <Controller
              name="pan"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder={"Enter pan"} />
              )}
            />
            <p style={{ color: "red" }}>{errors.pan?.message}</p>
          </FormControl>}
          <FormControl id="brand_name">
            <Controller
              name="brand_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder={"Enter brand_name"} />
              )}
            />
            <p style={{ color: "red" }}>{errors.brand_name?.message}</p>
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Update Shop
          </Button>
        </Stack>
      </form>
    </>
  );
}

UpdateShopForm.propTypes = {};

export default UpdateShopForm;
