import "../styles/globals.css";
import "../styles/m_tag.css";
import "../styles/Home.module.css";
import "../components/molecules/pops/avatar.css"
import "../components/molecules/header/header.css"
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../helpers/apollo";
import { ChakraProvider } from "@chakra-ui/react";
import React, { createContext, useEffect } from "react";
import Layout from "../components/molecules/layout/layout";
import { Provider, useSelector, useDispatch } from "react-redux";
import  store, { AppState, persistor, wrapper } from "../redux/store";
import { toast } from "react-toastify";
import { commonActions } from "../redux/slices/common";
import { Provider as AP } from "next-auth/client";
import "reflect-metadata";

import ErrorBoundary from "../components/organism/guard/error-boundry";
import { PersistGate } from "redux-persist/integration/react";

// import store from '../redux/store';




function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const WrappedComponent = () => {
    const dispatch = useDispatch();

    const { visible, message, type } = useSelector(
      (state: AppState) => state.common.toast
      
    );

    const ctx = createContext("ctx" ? "request" : "response");

    useEffect(() => {
      let mount = true
      if(mount){

        if (visible) {
          toast[type || "info"](message, {
            autoClose: 5500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          progress: undefined,
          position: toast.POSITION.BOTTOM_CENTER,
          onClose: () => dispatch(commonActions.hideToast()),
        });
        }
        return ()=>{
          mount = false
        }
      }
    }, [visible]);

    // const {Component, pageProps, store} = props;
    return (
      <ChakraProvider>
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ChakraProvider>
    );
  };


  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        {/* <AP session={pageProps.session}> */}
        <ErrorBoundary>
          <WrappedComponent />
          </ErrorBoundary>
        {/* </AP> */}
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}


export default wrapper.withRedux(MyApp);
