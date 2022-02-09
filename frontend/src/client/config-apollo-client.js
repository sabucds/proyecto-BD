import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

/* const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
}); */

/* client.query({
    query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
  })
    .then(result => console.log(result)); */

export default client;
