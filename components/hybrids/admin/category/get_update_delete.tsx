import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const GET_CATEGORIES = gql`
query getCategories {
  categories {
    id
    category
    requestStatus
  }
}
`;
export const UPDATE_CATEGORIES_QUERY = gql`
subscription {
categoriesS {
  id
  category
  icon
  requestStatus

}

}
`

export const UPDATE_CATEGORIES_MUTATION = gql`
subscription {
delCategoriesS {
  id
  category
  icon
  requestStatus

}

}
`


export const DELETE_CATEGORY=gql`
mutation($id: Int!) {
deleteCategory(id: $id){
  id
}
}
`

export const UPDATE_CATEGORY = gql`
  mutation ($requestStatus: String!, $id: Int!) {
    updateCategory(requestStatus: $requestStatus, id: $id) {
      id
      category
      requestStatus
    }
  }
`;

export const ViewCategoryRequests = ()=>{
const {data, loading, error} = useQuery(GET_CATEGORIES)
const {data: _data,loading: _loading} = useSubscription(UPDATE_CATEGORIES_QUERY)
const {data: __data,loading: __loading} = useSubscription(UPDATE_CATEGORIES_MUTATION)

const [deleteCategory]=useMutation(DELETE_CATEGORY)
const [updatedView, update] = useState([])

useEffect(()=>{
  let mount = true
  if(mount){
    if(data){

      update(data.categories)
    }
    if(_data){
      update(updatedView.concat(_data.categoriesS))
    }
    
  }
  return ()=>{
    mount = false
  }
},[_data, data, update])

useEffect(()=>{
  let mount = true
  if(mount){

    if(__data){
      update(updatedView.filter(i=>i.id!==__data.delCategoriesS.id))
    }
    
  }
  return ()=>{
    mount = false
  }
},[__data, update])

const _delete=(id)=>{
  update((updatedView?updatedView:data.categories).filter(i=>i.id !== id))
  deleteCategory({variables:{id: id}})
}

if(loading){

  return <>loading..</>
}
if(error){
  return <>Error: {error}</>
}

if(loading && _loading){

  return <>loading subscription..</>
}

console.log('test',data, _data, updatedView)

return<><br/>Avialable Categories <br/><div><ul>{(updatedView?updatedView:data.categories).map((i)=>{
  return <li key={i.id}>
    <Box width={"90%"} flexDirection={"row"} justifyContent="space-around">
    <HStack justifyContent="space-between"><h1>{i.category}</h1><EditIcon/>{<div onClick={()=>{_delete(i.id)}}><DeleteIcon/></div>}{`'--->'${i.requestStatus}`}</HStack>
    </Box>
    </li>})}</ul></div></>

}