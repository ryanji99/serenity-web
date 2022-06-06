import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_ROOT_URL,
  cache: new InMemoryCache(),
  credentials: 'include',
});
