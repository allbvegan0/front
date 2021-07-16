import { Box, Avatar  } from "@chakra-ui/react";
import { Center, Grid, useColorModeValue,  } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import withAuth, { withShopAuth } from "../../helpers/withAuth";
import { useUser } from "../../hooks/nav";
import BasicStatistics from "./basic-stats";
import { AppState } from "../../redux/store";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { LabCanvas } from "../../components/hybrids/shop/lab-canvas";
import UpdateShopForm from "../../components/forms/shop/updateShopForm";
import TitleDescriptionForm from "../../components/forms/lab/titleDescriptionForm";
import {DATA} from "../../components/rasa/watch/apiCombined";

// set shopInfo Configure Form
const ShopStatus = (props)=>{
  const{id, subscribed_till, subscription_type} = props.shop
  return<Box
  maxW={"320px"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={2}
  textAlign={"center"}><pre>
    {
      `id: ${id}`
    }
    </pre><br/>
    {`subscription till: ${subscribed_till}`}<br/>
    {`subscription type: ${subscription_type}`}<br/>
    {`cookie-domain:.razorpay.com cookie-name:firstAttribUtm cookie-path:/ `}
  </Box>
}
const SetShop=() =>{
  const{ register, control, reset} = useForm()
  const onSubmit = (data: any)=>{
    data.preventDefault()
    console.log('submitted', data.target)
  }
  return       <Box
  maxW={"320px"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={2}
  textAlign={"center"}
  ><form onSubmit={onSubmit}>
    <label>Setup Shop Information</label>
    <br/>
    <input placeholder={'choose type'} style={{
      border:"2 1px", borderColor:"black", borderRadius:"4px", height:"45px", padding:"5px"}}/><br/>
    <input placeholder={'enter Company Name'}/><br/>
    <input placeholder={'enter PAN Number'}/><br/>
    <input placeholder={'enter GST Number'}/><br/>
    <button type="submit" 
    style={{
      backgroundColor:"pink", 
      width:"80%", height:"40px", 
      color:"white", 
      fontWeight:"bold", 
      borderRadius:"5px", 
      padding:"4px" 
      }}>Submit</button>
  </form></Box>
}
// set brandImage
const RandomFontGenerator = ()=>{
  // UPDATE_SHOP_SUBSCRIPTION_OWNER_COMPANY_NAME()
  const user = useUser()

  return    <Avatar
  size={"sm"}
  name={user&&user.name ? user.name : 'bllb'}
  fontFamily={"fantasy"}
  src={'/'}
  alt={"Avatar Alt"}
  mb={4}
  pos={"relative"}
  _after={{
    content: '"8"',
    w: 6,
    h: 6,
    bg: "green.300",
    border: "2px solid white",
    rounded: "full",
    pos: "absolute",
    bottom: -2,
    right: 3,
  }}
/>
}

const SetBarandImage =()=>{
  const onSubmit = (data:any)=>{
    data.preventDefault()
    console.log('submitted')
  }
  return <div>
    <Center>
    <Box
  maxW={"320px"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={2}
  textAlign={"center"}
  >
    <form onSubmit={onSubmit}>
    
    <label>Setup Brand Logo</label>
    <br/><br/>
    <input placeholder={'choose brand image'} type="file"/><br/><br/>
    
    <button type="submit"   style={{
      backgroundColor:"pink", 
      width:"80%", height:"40px", 
      color:"white", 
      fontWeight:"bold", 
      borderRadius:"5px", 
      padding:"4px" 
      }}>Submit</button><br/>
    <RandomFontGenerator/>

  </form></Box></Center></div>
}
// notify completion
const SubscribeShopState =()=>{
  const ingre = async()=> {
    const ingredients = await DATA.flatMap((ingredient)=>{
      const en = ingredient.SYNONYMS.English
      const hn = ingredient.SYNONYMS.Hindi

       return {en, hn}
    })
    return  ingredients.slice(4,10)
  }
  const onSubmit = ()=>{
    console.log('submitted', ingre)
  }
  return <Box
  maxW={"320px"}
  w={"full"}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  rounded={"lg"}
  p={2}
  textAlign={"center"}
  ><form onSubmit={onSubmit}>

    <button onClick={(e)=>{
      e.preventDefault()
      console.log('ing',ingre())}}>Sync Data</button>

  </form>
  
  </Box>
}


// attach inventtory
const UpdateShop =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return    <Center>
  <Box
maxW={"320px"}
w={"full"}
bg={useColorModeValue("white", "gray.900")}
boxShadow={"2xl"}
rounded={"lg"}
p={2}
textAlign={"center"}
><UpdateShopForm/></Box></Center>
}
const VerifyInventory =()=>{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Title", { required: true })} type="radio" value="Individual" />
      <input {...register("Title", { required: true })} type="radio" value="Company" />
      <br/>
      <Box>
      <input type="text" placeholder="Company Name" {...register("Company Name", {required: true, max: 200, min: 1})} />
      </Box>
      <br/>
      
      <input type="text" placeholder="Individual Name" {...register("Individual Name", { max: 100, min: 2})} />
      <br/>
      
      <input type="url" placeholder="GST_NUMBER" {...register("GST_NUMBER", {required: true, min: 10, maxLength: 10})} />
      <br/>
      
      <input type="text" placeholder="PAN_NUMBER" {...register("PAN_NUMBER", { max: 10, min: 10})} />
      <br/>
      
      <input type="text" placeholder="Description" {...register("Description", {required: true, max: 2000, min: 20})} />
      <br/>
      
      <select {...register("Ingredients", { required: true })}>
      </select>
      <select {...register}>
        <option value="sub_category1">sub_category1</option>
        <option value=" sub_category2"> sub_category2</option>
      </select>
      <br/>

      <input type="submit" />
    </form>
  );
}
// Lab => create formula
// => add {Title Description}


const CreateFormulaTitleDescription =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <Center>
  <Box
maxW={"320px"}
w={"full"}
bg={useColorModeValue("white", "gray.900")}
boxShadow={"2xl"}
rounded={"lg"}
p={2}
textAlign={"center"}
>
  <TitleDescriptionForm/>
  </Box>
  </Center>
}



// => add Category / request Category
const AttachOrRequestCategory =()=>{
  const [categories, addCategory] = React.useState([])
  const [toggle, setToggle] = React.useState()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data)=>{
      // data.preventDefault()

    console.log('submitted', data)
    addCategory(categories.concat(data))
    reset:{
      category:""

    }
  }
  React.useEffect(()=>{
    console.log(categories)
  },[categories])
  
  return <><form id="category" onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder={"Add Category"} {...register("category", {required: true, maxLength:80})}/>
    <input type="submit" 
    />
    </form>

    {/* <div> */}
    <ul>
    <AttachOrRequestSubCategory categories={categories}/>

        </ul>
      
      {/* </div> */}
  </>
}








// => add SubCategory / request Subcategory
const AttachOrRequestSubCategory =(categories)=>{
  const [subCategories, addSubCategory]=React.useState([])
  const dispatch = useDispatch()

  const onSubmit = (data)=>{
    console.log('submitted', data)
    addSubCategory(subCategories.concat(data))
    // dispatch(handleAddCategory({category: data}))
    // dispatch(handleAdminTasks({"add_category"}))
    // dispatchRequest for audition
    // audition at AdminPanel
    // release after approval
    // 
  }
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return  <div>


  {categories.categories.flatMap((c)=>{
    //  console.log(c)
    return <div key={c.category}><li key={c.category}>{c.category}</li>
    <ul>
      {
        subCategories.flatMap((sc)=>{
          return <li>{sc.subCategory}</li>
        })
      }
    </ul>
     <form onSubmit={handleSubmit(onSubmit)}><input type="text" placeholder={"add Subcategory"} {...register("subCategory", {required: true, maxLength:80})}/>
     <input type="submit"/>
     </form>
    </div>
  })
}
</div>
}





// => add ingredients quantity
const attachOrRequestIngredients =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return        <></>
}
// => add process details
const attachOrRequestProcess =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => add benefits
const attachOrRequestBenifits =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => add how to use
const attachOrRequestHowToUse =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => generate Labels
const previewFormula =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => send sample to testers
const attachOrRequestTesters =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => attach testemonials
const attachOrRequestTestemonials =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => review Improvments
const attachOrRequestImprovements =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => submit for release
const attachOrRequestRelease =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}
// => register formula
const registerFormula =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}

// => admin release 
const adminRelease =()=>{
  const onSubmit = ()=>{
    console.log('submitted')
  }
  return <form onSubmit={onSubmit}>

  </form>
}

function ShopDashboard(props) {
  return (
    <>
      {/* <BasicStatistics {...props}/> */}
      <Center py={6}>
        <Grid
          p={3}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={4}
        >
          <ShopStatus {...props}/>
          {/* <SetShop/> */}
          <UpdateShop/>
          <SetBarandImage/>
          <SubscribeShopState/>
          <AttachOrRequestCategory/>
          <CreateFormulaTitleDescription/>
          </Grid>
          </Center>
          {/* <LabCanvas/> */}
          {/* <VerifyInventory/> */}
      <Box></Box>
    </>
  );
}

const mapDispatch = {
  // captureFromRazorPay: (data: any) => captureFromRazorpay(data),
};

const mapState = (state: AppState) => ({
  currentUser: state.user.user.data,
  shop: state.shop.Shop.data,

  subscriptionOrder: state.subscription.Subscription.data,
});

const connector = connect(mapState, mapDispatch);
type PropFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropFromRedux {
  // activeStep: number;
  captureFromRazorpay(data: any): any;
  createShopForUser(data: any): any;

  // nextStep(data: number): any;
  // previousStep(data: number): any;
  // ClearCart(): any;
  // orderItems: any;
  subscriptionAmount: {price: number}
  currentUser: any;

  subscriptionOrder: any;
}

export default connector(withShopAuth(ShopDashboard));
