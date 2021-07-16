import { Box } from "@chakra-ui/react"
import React from "react"

const PriviewProduct =()=>{
  const [product, setProduct] = React.useState({message:"?"})
  return <Box>{
    product}
    </Box>

}

export default PriviewProduct