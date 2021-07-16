
import { Box, useColorModeValue } from "@chakra-ui/react"

import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
// import { handleAddUserAddLab } from "../../../redux/thunk/lab"
import { AddCategoryRequests } from "./category/add"
import { ViewCategoryRequests } from "./category/get_update_delete"
import { CategorySelector } from "./category/selector"
import { AddSubCategoryRequests } from "./category/subCategories/add"
import { ViewSubCategoryRequests } from "./category/subCategories/get_update_delete"
import SubCatSelect from "./category/subCategories/selector"

export const CreateCategory = ()=>{
  return<>create category</>

}



export const AttachOrRequestCategory =()=>{
  const [categories, addCategory] = React.useState([])
  const [toggle, setToggle] = React.useState()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const onSubmit = (data)=>{
      // data.preventDefault()

    console.log('submitted', data)
    addCategory(categories.concat(data))
    // dispatch(handleAddUserAddLab(data))
    reset:{
      category:""

    }
  }
  React.useEffect(()=>{
    console.log(categories)
  },[categories])
  
  return <><form id="category" onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder={"Add Category"} {...register("category", {required: true, maxLength:80})}/>
    <input type="submit" 
    />
    </form>
    
  </>}




export const approveCategoryRequest = ()=>{
  return<>appprove a category request</>


}

export const addSubCategory = ()=>{
  return<>create subcategory for category</>


}

export const approveSubCategoryRequest = ()=>{
  return<>approve sub-category requests</>

}

 export const CategoryAdminPanel = ()=>{
  return <>
  <CreateCategory/>

  <Box       maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={2}
      textAlign={"center"}>

  <AddCategoryRequests/>
  <ViewCategoryRequests/>
  </Box>

  <Box       maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={2}
      m={4}
      textAlign={"center"}>
        <CategorySelector/>


  {/* <AddSubCategoryRequests/> */}
  {/* <ViewSubCategoryRequests/> */}
  </Box>
  <SubCatSelect/>


  <br/>
  </>
}

// export default CategoryAdminPanel