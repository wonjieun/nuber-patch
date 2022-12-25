import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const isDev = process.env.NODE_ENV === 'development';

export const isLoggedIn = makeVar(Boolean(localStorage.getItem('jwt')));

const client = new ApolloClient({
  uri: isDev
    ? 'http://localhost:4000/graphql'
    : 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default client;
