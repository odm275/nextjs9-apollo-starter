import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch'
import cookie from 'cookie';
import { getNextCookies } from './lib/helpers/getNextCookies';


export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  const httpLink = createHttpLink({
    uri: 'https://graphql.fauna.com/graphql', // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getNextCookies(ctx).token;
    // return the headers to the context so httpLink can read them
    const authorization = token ? `Bearer ${token}` : `Bearer ${process.env.FAUNA_SERVER_KEY}`;
    return {
      headers: {
        ...headers,
        authorization
      },
    };
  });


  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  })
}

