import { useQuery, useSubscription } from "@apollo/client";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GET_CATEGORIES, UPDATE_CATEGORIES_MUTATION, UPDATE_CATEGORIES_QUERY } from "./get_update_delete";
import { ViewSubCategoryRequests } from "./subCategories/get_update_delete";

export const CategorySelector = ()=>{
  const {data, loading, error} = useQuery(GET_CATEGORIES)
  // const {data: _data,loading: _loading, } = useSubscription(UPDATE_CATEGORIES_QUERY)
// const {data: __data,loading: __loading} = useSubscription(UPDATE_CATEGORIES_MUTATION)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [selectedCategory, select] = useState('')
  // const [updatedView, update] = useState([])
  // const {data: _sfromc, loading: _loadingS } = useQuery(GET_SUBCATEGORIES)
  useEffect(()=>{
    let mount=true
    if(mount){
      if(data){

        select(data.categories[0].id)
      }
    }
    return ()=>{
      mount=false
    }

  },[data])

  if(loading){
  
    return <>loading..</>
  }
  if(error){
    return <>Error: {error}</>
  }



  
  const show=(_data)=>{
    console.log('selector selected data',_data.target.value)
    console.log('setted value',selectedCategory)
  }

    
    return <><form onSubmit={handleSubmit(show)}>
      <select defaultValue={selectedCategory} {...register("categories", { required: true })} onChange={(data)=>{
      select(data.target.value)
    }
      }>
    {(data.categories).map((i, index)=>{
      return <option key={index} value={i.id}>{i.category}</option>
    })}
    </select>

    </form>
    {
      !!!selectedCategory?
      <div>Choose a category</div>:<ViewSubCategoryRequests id={selectedCategory}/>
    }
    </>
  }