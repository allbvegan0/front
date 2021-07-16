import { QuestionIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Center, Heading, HStack, VStack } from "@chakra-ui/react"
import React from "react"
import Description from "../../../molecules/decorative/description"
import { data } from "./data"

const _data = data


const ProductCard = (props)=>{
console.log('pcrds',props)
  const x = props.x
  
  return           <VStack>
  <img width="100%" src={_data[x].images[0]} alt="Product banner"></img>
  <h2>{_data[x].title}</h2>
  <HStack>

  {
    _data[x].varient.map((i, index)=>{
      return <VStack key={index}>
    
      <Box bg="green" color="white" fontFamily="monospace">
  
    <h3 >{i.size} ml</h3>
      </Box>
    <Heading color="pink">
      ₹ {i.price}
      
      </Heading>
    <Button lang={"es"} width="150px">Add to cart
  </Button>
  
  </VStack>
    })
  }
  </HStack>


  <Description>Description</Description>
  <Description>Who To Use</Description>
  <h5>{_data[x].who_to_use}</h5>
  <Description>How To Use</Description>
  <h5>{_data[x].how_to_use}</h5>


  <Description>Benifits</Description>
  <h5>{_data[x].benifits.map((i, index)=>{
    return<div key={index}>º {i} º</div>
  })}</h5>
  <Description>Ingredients
    </Description>

  <h5>{_data[x].ingredients.map((i, index)=>{
    return<div key={index}>≥ {i} ≤</div>
  })}</h5>
  <Description>Certified By</Description>
  <Center>
  <h5>{_data[x].certificate.map((i, index)=>{
    return<div key={index}>º {i} º</div>
  })}</h5>
  </Center>
  {/* <Description>here Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse accusamus, labore quos est voluptas ipsam a? Neque nesciunt excepturi earum quis?</Description> */}
  {/* <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi unde non, dignissimos itaque rem nulla veritatis excepturi sunt molestiae dolores, eveniet id voluptate dolorem? Incidunt necessitatibus eos ea! Quibusdam expedita aliquam, iusto deleniti voluptates eos dolores quisquam totam repellat in.</h3> */}

</VStack>
}


export default ProductCard