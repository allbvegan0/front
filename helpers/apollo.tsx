import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";



const isBrowser = typeof window !== "undefined";
const uri = isBrowser
  ? "http://localhost:4000/graphql"
  : "http://www.allbvegan.com/graphql";

// httpLink
const httpLink = createHttpLink({
  uri: uri,
  fetch: !isBrowser && fetch,
  credentials: "same-origin",
});

// linkError
const linkError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});


// session
const _session = () => {
  const device_id = window.localStorage.getItem("device_id");
  const token = window.localStorage.getItem("token");
  const accessToken = window.localStorage.getItem("accessToken");
  const sessionToken = window.localStorage.getItem("session");

  return sessionToken?sessionToken:accessToken ? accessToken : device_id ? device_id : token;
};

// wsLink
// const wsLink = process.browser
//   ? new WebSocketLink({
//       // if you instantiate in the server, the error will be thrown
//       uri: `ws://localhost:4000/graphql`,
//       options: {
//         reconnect: true,
//         timeout: 30000
//       },
//     })
//   : null;


// authLink
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem("token");
  const token = _session();

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${_session()}`,
      // "Content-Type": 'multipart/form-data'
    },
  };
});


// spit Link
const _link = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      // wsLink,
      // linkError as any,
      createUploadLink({
        uri: uri,
        credentials: "include",
        fetch,
      }) as any,
      // httpLink as any,
    )
  : httpLink;

// apollo client

export const client = new ApolloClient({
  connectToDevTools: isBrowser,
  link: ApolloLink.from([
    authLink,
    linkError,
    _link,

  ]),
  cache: new InMemoryCache(),
});
