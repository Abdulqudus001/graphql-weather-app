import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://evening-woodland-33477.herokuapp.com/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
