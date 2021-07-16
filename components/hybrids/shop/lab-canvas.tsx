import {Box, useColorModeValue} from '@chakra-ui/react'
import * as LiveRegion from '@chakra-ui/live-region'
import * as FocusLock from '@chakra-ui/focus-lock'

const message = [
  {
    m:[
      `"विषुव	m.	viSuva	equinox [astron.]"	
      उपलम्भक	m.	upalambhaka	detector [Chem.]	
      नियोगिन्	m.	niyogin	clerk [civil servant]	
      ई-वाणिज्य	n.	I-vANijya	e-commerce [computer]	
      यावदहं प्रत्यागच्छामि, तावद् प्रतीक्षां करोतु	sent.	yAvadahaM pratyAgacchAmi, tAvad pratIkSAM karotu	Wait till I come."`
    ]
  },
  {
    q:[
      `amaramAla=[
        borads: char utf-8 
        languages:[
          hindi:
          sanskrut:
          english:
          chinese:
          french:
          german:
          latin:
        ]
      ]`
    ]

  }
]




export const LabCanvas = ()=>{
  console.log('@chakra/',LiveRegion, FocusLock)
  return<><Box maxW={"100%"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={2}
  textAlign={"center"}>{"Let's Create Product Canvas"}{message[0].m[0]}</Box></>
  
}