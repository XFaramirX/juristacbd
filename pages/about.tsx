import Link from "next/link";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import Button from "@material-ui/core/Button";

import gql from "graphql-tag";
import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({
  uri: "http://localhost:7000/graphql",
  fetch: fetch as any
});
const cache = new InMemoryCache();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

client
  .query({
    query: gql`
      query GetLaunch {
        users {
          id
          name
        }
      }
    `
  })
  .then(result => console.log(result));

export default () => (
  <div>
    This is a static page goto{" "}
    <Link href="/">
      <a>dynamic</a>
    </Link>{" "}
    page.
    <p>
      <ApolloProvider client={client}>test</ApolloProvider>,
    </p>
    <Button variant="contained" color="primary">
      Hola Mundo!
    </Button>
  </div>
);
