import { useQuery } from "@apollo/client"
import { Radio, RadioGroup, CheckboxGroup, Checkbox } from "@chakra-ui/react"
import React, { useState } from "react"
import { GET_CATEGORIES } from "../get_update_delete"
import { GET_SUBCATEGORIES } from "./get_update_delete"

const SubCatSelect = ()=>{
  const {data, loading, error} = useQuery(GET_CATEGORIES)
  const[selectedId, select] = useState('')
const {data:_data, loading:_loading, error:_error} = useQuery(GET_SUBCATEGORIES,{variables:{category: Number(selectedId)}})

  if(loading){

    return <>loading..</>
  }
  if(error){
    return <>Error: {error}</>
  }

  if(_loading){

    return <>loading..</>
  }
  if(_error){
    return <>Error: {error}</>
  }
  console.log(_data,'-=-=>')
  return <>
  <>Choose Category</>
  <RadioGroup value={selectedId} onChange={(i)=>{
    select(i)
    
    }}>
    {data.categories.map(i=><Radio size="lg" colorScheme="green" m={4}key={i.id} value={i.id}>{i.category}</Radio>)}
  </RadioGroup>
  <>Choose Subcategories</><br/>
  <CheckboxGroup >

  {_data.subCategories.map(i=><Checkbox iconSize="10rem" key={i.id} m={4}>{i.subCategory} </Checkbox>)}
  </CheckboxGroup>
  </>

}

export default SubCatSelect