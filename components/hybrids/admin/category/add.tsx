import { gql, useMutation } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export const ADD_CATEGORY = gql`
  mutation ($category: String!) {
    addCategory(category: $category) {
      id
      category

    }
  }
`;


export const AddCategoryRequests = ()=>{

  const [ addCategory] = useMutation(ADD_CATEGORY)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data)=>{
  addCategory({variables:{category: data.category}})
  reset({category:""})
}

  return <><Box bg="violet" m={3} padding={2}><form id="category" onSubmit={handleSubmit(onSubmit)}>
  <input type="text" placeholder={"Add Category"} {...register("category", {required: true, maxLength:80})}/>
  <input type="submit" 
  />
  </form></Box>
</>

}