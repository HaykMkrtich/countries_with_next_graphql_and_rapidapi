import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries-graphql3.p.rapidapi.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'X-RapidAPI-Key': 'c0e8772603msh1eb54161e8a640ap16f3e2jsn3559ba7b08fe',
    'X-RapidAPI-Host': 'countries-graphql3.p.rapidapi.com',
  },
});

export default client;
