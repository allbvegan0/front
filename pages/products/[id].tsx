import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { data } from "../../components/organism/feed/products/data";
import ProductCard from "../../components/organism/feed/products/product.card";

export const getStaticPros: GetStaticProps = async ({ params }) => {
 
  const {id} = params
  const x = id
  return {
    props: {x}
  };
};
const ProductDetails = (props)=>{

  console.log('in id section',props)
  const router = useRouter()
  const {id} = router.query
  console.log('-=-=>',id)
  return <ProductCard x={(id)} />
}

export default ProductDetails