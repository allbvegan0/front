import React, { useEffect } from "react"
import {Box, useColorModeValue} from "@chakra-ui/react"
import { array } from "yup/lib/locale"
import Title from "../../../components/molecules/decorative/title"
import Description from "../../../components/molecules/decorative/description"

const Questions = [
  // "ghar ka naam",
  // "pet name",
  // "what is your pet name?",
  // "what's your pet's name?",
  // "what's your favourite channel?",
  // "what's your favourite color?",
  // "Do you need help?",
  "Are you having hair problems?",
  "Are you having ear problems?",
  "Are you having any problem?",
  "Ask every second?"
]
  // ghar ka naam
  // pet name
  // what is your pet name?
  // what's your pet's name?
  // what's your favourite channel?
  // what's your favourite color?
  // Do you need help?
  // Are you having hair problems?
  // Are you havinng ear problems?
  // Are you having ?
  // Ask every second?
  query:`ask:{post:"" category:"Question?"}`
  mutation:`filter(reasons:[] ingredients:[] benefits:[] products:[])`
  subscribe:`answer:filteredList`

  // const { data, loading, error } = useQuery(GET_ADDRESS_, {
  //   variables: { email: me.email },
  // });

  // console.log("query", data, loading, error);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

export const QuestionBox = ()=>{
  return <input type="text" placeholder={"Do you have a question?"}/>
}

const QuestionsBox = ()=>{
  var L = Questions.length

  const Latest = Questions.slice(L-2,L).join("  -  ")
  useEffect(()=>{
    const show_latest = async()=>{
      let mount=true
      if(mount){

        // questions()
         L = Questions.length
        const MostUsers = Questions.filter(question=>question.includes('ear'))
        const unique_blob_strings = Questions.splice(5)
        const P = async()=> await Questions.push("test")
        const FE = async()=> await Questions.forEach(element => {
          console.log('inside Each',element, "Five F4E Ph$´y`6`vi")
        });


        

        // console.log(
        //   '=======≠≠≠≠≠≠≠≠≠streams',
        //   L,
        //   P(),
        //   FE(), 
        //   'array----->',Questions, 
        //   'slice----->',Latest, 
        //   '-------->filter',MostUsers, 
        //   'blob from question=======>',unique_blob_strings)
      }
      return ()=>
      {mount=false}
    }
    show_latest()
    
  },[])
  return <Box
  maxW={"320px"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={6}
  textAlign={"center"}>

    <ul>
     { Questions.map((q,index)=>{
        return <li key={index}>{q}</li>
      })}
    </ul>
    <Description>Answer Soon</Description>
    <div> :marker: length  {`${L}`}  </div>
    <div>:helper: show_latest -------≥≤ {Latest}</div>
    <div>TodoList</div>
    // create a post with Todo List Filter for Customer
    // 
  </Box>

}

// ::marker {
//   unicode-bidi: isolate;
//   font-variant-numeric: tabular-nums;
//   text-transform: none;
//   text-indent: 0px !important;
//   text-align: start !important;
//   text-align-last: start !important;
// }

export default QuestionsBox