// title
// content
import { Button, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { TitleField } from "../../molecules/input/titleInput";
import { ContentInput } from "../../molecules/input/contentInput";

interface IFormInput {
  title: string;
  content: string;
}

const schema = yup.object().shape({
  title: yup.string().required().min(5).max(100),
  content: yup.string().required().min(10).max(1000),
});

export const PostForm = ({ submitData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    submitData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="title">
          <FormLabel>Post Title</FormLabel>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => <TitleField {...field} />}
          />
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        </FormControl>
        <FormControl id="content">
          <FormLabel>Post Content</FormLabel>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => <ContentInput {...field} />}
          />
          <p style={{ color: "red" }}>{errors.content?.message}</p>
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create Post
        </Button>
      </Stack>
    </form>
  );
};
