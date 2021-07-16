import { Box, useToast, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminBasicStatistics } from "../../components/rasa/ABStatistics";
import { MallBasicStatistics } from "../../components/rasa/MallStatistics";
import withAuth from "../../helpers/withAuth";
import { postActions } from "../../redux/slices/post";
import { handleGetPost, handleGetPosts } from "../../redux/thunk/post";
import { setHeader } from "../../services/setHeader";
import { baseURL } from "../blog";
import {CategoryAdminPanel} from "../../components/hybrids/admin/createCategory";

// export const getServerSideProps: GetServerSideProps = async () => {

//   const res = await fetch(`${baseURL}/devices`);
//   const _devices = await res.json();
//   const deviceC = _devices.length


//   const res1 = await fetch(`${baseURL}/blog`);
//   const _feed1 = await res1.json();
//   // const { _posts } = _feed1;
//   console.log('==--0==>',_feed1.length)

//   const res3 = await fetch(`${baseURL}/feed`);
//   const _feed3 = await res3.json();
//   // const { _posts: ps } = _feed3;
//   console.log('==--1==>',_feed3.length)

//   // const res2 = await fetch(`${baseURL}/admin/usercount`);
//   // const _feed2 = await res2.json();
//   // console.log('==--2==>',_feed2.length)
//   // const { _all } = _feed2;

//   // const userCount = _all?_all:2;

//   const res4 = await fetch(`${baseURL}/admin/draft`);
//   const _feed4 = await res4.json();
//   // const { posts: dr } = _feed4;
//   console.log('==--3==>',_feed4.length)

//   const blogCt = _feed1.length;
//   const postC = _feed3.length

//   const isBrowser = typeof window !== "undefined";

//   const _baseUrt = isBrowser
//     ? "http://localhost:4000/graphql"
//     : "http://localhost:4000/graphql";

//     // const dispatch = useDispatch()
//     const _feed = ["dispatch(handleGetPost)"]

//   const draft_count = _feed4.length;

//   return {
//     props: {
//       _feed,
//       posts_count: postC,
//       blog_count: blogCt,
//       draft_count: draft_count,
//       device_count: deviceC,
//       user_count: 2
//     },
//   };
// };

const AdminScreen = (props) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log('redux state',state)
  React.useEffect(()=>{
    let mount = true
    if(mount){
      dispatch(handleGetPosts({}))
    }
    return()=> {mount= false}
    

  },[handleGetPosts])
  return (
    <>
      <>...</>
      <>
        <h2>Controlled Sessions</h2>
        <CategoryAdminPanel/>
        <Box       maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={2}
      textAlign={"center"}>
        <>Avialable PubSub List</>
        <>Category from category/view_display_/get_update_delete</>

        
        

  {/* <AddSubCategoryRequests/> */}
  {/* <ViewSubCategoryRequests/> */}
  </Box>
        <br/>
      </>
      <>{"UncontrolledSession"}</>

      {/* <AdminBasicStatistics props={props} /> */}
      {/* <MallBasicStatistics props={props} /> */}

    </>
  );
};

export default withAuth(AdminScreen);
