import { gql } from "@apollo/client"
import React from "react"
import DATA from "../../rasa/watch/apiCombined"


export const addIngredient = async()=>{
  const ingredients = await DATA.flatMap((ingredient)=>{
    ingredient.DESCRIPTION
    ingredient.NAME
    ingredient.SYNONYMS
    ingredient.THERAPEUTIC_USES
    ingredient.PROPERTIES_AND_ACTION
  })
  return  ingredients.slice(4)
}

const FormulaForm = ()=>{

  const [testers, setTesters] = React.useState([])
  const [benifits, setBenifits] = React.useState([])
  const [testemonials, setTestemonials] = React.useState([])


  const [benificiary_product, PreviewBP] = React.useState({
    category:"",
    subCategory:"",
    title:"",
    description:"",
    ingredients:[],
    benefits:[],
    how_to_use:[],
    testers:testers
  })

  // use query 
  const CREATE_INGREDIENT = gql`
    mutation{
      addIngredient(name: string, ){

      }
    }
  
  `




const getBeninfits = async()=>{

  const _b = await benifits.filter(b=>b.benefit.includes("proved"))
  const _p = await testemonials.filter(t=>t.benefit.includes("approved"))
  console.log('Hence Proved')

}

  return <>{'results'}</>
} 

export default FormulaForm