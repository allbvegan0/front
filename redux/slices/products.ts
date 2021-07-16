// import { useState } from "react"

// export {

// }

// // thunk
// // filterable list
// // schema: prisma
// // name: Product
// // category: HealthCare

// // category: Skill India
// // category: Body Care
// // category: allbVegan
// // category: New
// // category: Sale
// // category: Discounted
// // category: HandMade


// // For Admin Approval
// // Title: {ProductForm}
// // Description: {LABForm}
// // // createForm Reciept
// // // pop/LabForm: piccolo rasa 
// // // 
// // // generate Formula
// // // 
// // // setQuery Segregation
// // // Darwin Engine to use Back Permissions
// // // Corrupted Darwin Engion for BHARAT
// // // Earn & Learn & Earn ?? StarDome
// // // Visual ChakraUI ANR AND INR
// // // Skill Train I2
// // // N_Neo4J front represenntation
// // // Physical Material Study Break Resedue
// // // Change: Bhram
// // //  

// function Formulate(){
//   // currentState: 
//   const [state, changeState] = useState("")
//   const [unll, changeNull] = useState(null)
//   server:{
//     port:4000
//     user_Product:[]
//     // exist Product 
//     // register token 
//     // verify accessToken 
//     // login SessionToken
//     user_profile:[]
//     auth:"session"
//     // user_interests:["bodycare","healthcare","beauty","soap","cream",{...ingredients},{product.benifits}]
//     // http://localhost:3000/user/Verification?
// https://www.learnsanskrit.cc/index.php?
// all=Show+all+search+results&
// tran_input=auth&
// script=hk&
// mode=3
// 
//     // token=ey JhbGc iOi JIU zI1 Ni I
//     // AuthSetters: fr en ch
//     // letters:  fr:{å} en:{aA} ch:{啊Aå A撒J}
//      // अक्षर : å आ 三年生 三年思考日天
//      // औथ औरत au_th au_rat
//      // a_u_t_h
//     benefits:[]
//     products:[]
//     // price:[]
//     cart:[]
//     payments:[]
//     orders:[]

//   }
//   product:{
//     formuls:{
//       title:""
//       description:""
//       ingredients:[""]
//       benefits:[""]
//       how_to_use:[""]
//       bhagna:[""]
//       sandhi:[""]
//     }
//     register:{
//       _product:{
//         registrationId:""
//       }
//     }

//   }




// } 

import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryParams, ResponseState } from "../shared";

interface Product {
  id: number;
  Product_id: string;
  product: string;
  dictionary: {}
  // prisma.dictionary.shabdkosh.wordpress.dattAMzakoza.

  status: string;
  updated_at: Date;
}

interface ProductState {
  Product: ResponseState<Product>;
}

const initialState: ProductState = {
  Product: {
    fetching: false,
    data: [],
    // status: // ProductActions.createProductFailed[Symbol].
  },
};

const createProductRequest: CaseReducer<
  ProductState,
  PayloadAction<QueryParams>
> = (state) => {
  delete state.Product.error;
  state.Product.fetching = true;
};

const createProductSuccess: CaseReducer<
  ProductState,
  PayloadAction<ResponseState<Product>>
> = (state, { payload }) => {
  state.Product.data = payload.data;
  state.Product.fetching = false;
  state.Product.meta = payload.meta;
};

const createProductFailed: CaseReducer<ProductState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Product.fetching = false;
  state.Product.error = payload;
};

const getProductRequest: CaseReducer<ProductState, PayloadAction<QueryParams>> = (
  state
) => {
  delete state.Product.error;
  state.Product.fetching = true;
};

const getProductSuccess: CaseReducer<
  ProductState,
  PayloadAction<ResponseState<Product>>
> = (state, { payload }) => {
  state.Product.data = payload.data;
  state.Product.fetching = false;
  state.Product.meta = payload.meta;
};

const getProductFailed: CaseReducer<ProductState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.Product.fetching = false;
  state.Product.error = payload;
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    getProductRequest,
    getProductSuccess,
    getProductFailed,
    createProductRequest,
    createProductSuccess,
    createProductFailed,
    // checkProduct,
    // checkProductSucess,
    // checkProductFailed,
  },
});

export const ProductActions = ProductSlice.actions;
export const ProductReducer = ProductSlice.reducer;
