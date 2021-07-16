import { Avatar, Box, Button, Center, HStack, Link, SimpleGrid, VStack } from "@chakra-ui/react"
import React from "react"
import Description from "../../../molecules/decorative/description"
import { data } from "./data"

export const ProductThumbs=()=>{

  
  const _slice = data.slice(0,4)
  const _data = _slice 
  
  return  <HStack>{
    _data.map((i, index)=>{
return <div key={index} style={{width:"25%"}}>
    <Link href={`products/${index}`}>
      <VStack>

  <Avatar size="2xl"name="body butter" src={i.images[0]} alt="Product banner"/>
  <h4>{i.title}</h4>
  </VStack>
  </Link>
  </div>
    })}
    
    </HStack>
  
}

export const ProductCardsP=()=>{

  const _slice = data.slice(4,7)
  const _data = _slice 
  
  return  <HStack >{
    _data.map((i, index)=>{
return <div key={index}>
  <VStack w="100%" >
    <Link href={`products/${index}`}>
      <img width="100%" src={i.images[0]} alt={`${i.title}`}></img>
      <h2>{i.title}</h2>
      </Link>
{
  i.varient.map((x,index)=>{
    return <HStack key={index}>
<Box bg="green" color="white" fontFamily="monospace">
  
  <h3 >{x.size} ml</h3>
    </Box>
    <h2 color="pink">
      ₹ {x.price}
      
      </h2>
    <Button lang={"es"} width="150px">Add to cart
</Button>
</HStack>
  })
}

</VStack>
  </div>
    })}
    
    </HStack>
  
}

export const ProductCardsF=()=>{

  const _slice = data
  const _data = _slice 
  
  return  <Center >
    <SimpleGrid columns={[1,2]} spacing={3} >
    {/* <VStack > */}
      {
        _data.map((i, index)=>{
          return <div key={index}>
  <VStack w="45%" textAlign="center">
    <Link href={`products/${index}`}>
      <img width="100%" src={i.images[0]} alt={`${i.title}`}></img>
      <Description >{i.title}</Description>
      </Link>
{
  i.varient.map((x,index)=>{
    return <HStack key={index}>
<Box bg="green" color="white" fontFamily="monospace">
  
  <h3 >{x.size} ml</h3>
    </Box>
    <h2 color="pink">
      ₹ {x.price}
      
      </h2>
    <Button lang={"es"} width="150px">Add to cart
</Button>
</HStack>
  })
}

</VStack>
  </div>
    })}
    
    {/* </VStack> */}
    </SimpleGrid>
    </Center>
  
}
