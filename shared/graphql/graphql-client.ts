import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphqlClient = new ApolloClient({
  uri: "http://195.20.225.94/api/graphql",
  cache: new InMemoryCache(),
});
