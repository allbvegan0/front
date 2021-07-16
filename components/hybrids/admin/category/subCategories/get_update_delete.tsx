import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GET_CATEGORIES, UPDATE_CATEGORIES_QUERY } from "../get_update_delete";
import { CategorySelector } from "../selector";
import { AddSubCategoryRequests } from "./add";

export const GET_SUBCATEGORIES = gql`
query getSubCategories($category: Int!) {
  subCategories(category: $category) {
    id
    subCategory
    requestStatus
  }
}
`;



export const UPDATE_SUBCATEGORIES_QUERY = gql`
subscription {
subCategoriesS {
  id
  subCategory
  # category {
  #   id
  # }
  icon
  requestStatus
}

}
`

export const UPDATE_SUBCATEGORIES_MUTATION = gql`
subscription {
  delSubCategoriesS {
  id
  subCategory
  # category {
  #   id
  #   category
  # }
  icon
  requestStatus
}

}
`

export const DELETE_SUBCATEGORY=gql`
mutation($id: Int!) {
deleteSubCategory(id: $id){
  id
}
}
`

export const UPDATE_SUBCATEGORY = gql`
  mutation ($requestStatus: String!, $id: Int!) {
    updateCategory(requestStatus: $requestStatus, id: $id) {
      id
      category
      requestStatus
    }
  }
`;

export const ViewSubCategoryRequests = (id)=>{
  const {id:_id} = id
  console.log('id from selector', _id)
  // query
const {data, loading, error} = useQuery(GET_SUBCATEGORIES,{variables:{category: Number(_id)}})
// const {data: _data,loading: _loading, error: _error} = useSubscription(UPDATE_CATEGORIES_QUERY)


// subscription
const {data: _data,loading: _loading, error: _error} = useSubscription(UPDATE_SUBCATEGORIES_QUERY)

const {data: __data,loading: __loading, error: __error} = useSubscription(UPDATE_SUBCATEGORIES_MUTATION)


console.log('effected subscription-->',_data)

console.log('effected subscription on deletion-->',__data)


// deleteion
const [deleteSubCategory]=useMutation(DELETE_SUBCATEGORY)

// uupdate list for view
const [updatedView, update] = useState([])


useEffect(()=>{
  let mount = true
  if(mount){
    if(data){
      update(data.subCategories)
    }

    if(__data){
      console.log('before delete', __data, updatedView)
      update(updatedView.filter(i=>i.id!==__data?.delSubCategoriesS.id))
      console.log('act on delete', updatedView)
    }
    
  }
  return ()=>{
    mount = false
  }
},[_data, data,__data, update])

useEffect(()=>{
  let mount = true
  if(mount){

    if(_data){

      update(updatedView.concat(_data.subCategoriesS))
    }

    
  }
  return ()=>{
    mount = false
  }
},[_data])

const _delete=(id)=>{
  update((updatedView?updatedView:data.subCategories).filter(i=>i.id !== id))
  deleteSubCategory({variables:{id: id}})
}

if(loading){

  return <>loading..</>
}
if(error){
  return <>Error: {error}</>
}
if(_error){
  return <>Error: {_error}</>
}
if(__error){
  return <>Error: {__error}</>
}
if(loading && _loading){

  return <>loading subscription..</>
}
if(data && data.subCategories===[]){
  console.log('found []')
  return <>No data yet</>
}

// if(__data?.delSubCategoriesS){
//   return <div>
// {Object.values(_data?.delSubCategoriesS).map(data=>{
//    return <div>{data}</div>
// })}
// </div>
// }
console.log('test subcat',data, "-->",_data, "-->uptd",updatedView, 'cat',id)




return<><br/>Avialable Categories & their Sub Categories {_id}<br/>
<AddSubCategoryRequests id={_id}/>

<div><ul>

  {(updatedView?updatedView:data.subCategories).map((i)=>{

  return <li key={i.id}>
    <Box width={"90%"} flexDirection={"row"}>
    <HStack justifyContent="space-between"><Text>{i.subCategory}</Text><EditIcon/>{<div onClick={()=>{_delete(i.id)}}><DeleteIcon/></div>}{`'--->'${i.requestStatus}`}</HStack>
    </Box>
    </li>})}
    
    </ul></div></>

}


