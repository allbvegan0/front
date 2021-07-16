import { gql, useMutation } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { CategorySelector } from "../selector";


export const ADD_SUBCATEGORY = gql`
  mutation ($subCategory: String!, $category: Int!) {
    addSubCategory(subCategory: $subCategory, category: $category) {
      id
      subCategory

    }
  }
`;


export const AddSubCategoryRequests = (id)=>{

  

  const [ addSubCategory] = useMutation(ADD_SUBCATEGORY)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data)=>{
    console.log('create sub',data, id)
  addSubCategory({variables:{subCategory: data.subCategory, category: Number(id.id)}})
  reset({subCategory:""})
}

  return <><Box bg="violet" m={3} padding={4}>
    <form id="sucCategory" onSubmit={handleSubmit(onSubmit)}>
      
  <input type="text" placeholder={"Add SubCategory"} {...register("subCategory", {required: true, maxLength:80})}/>
  <input type="submit" 
  />
  </form>
  </Box>
</>

}