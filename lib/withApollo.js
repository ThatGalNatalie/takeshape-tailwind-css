import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: `https://api.takeshape.io/project/${process.env.NEXT_PUBLIC_TAKESHAPE_ID}/graphql`,
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_TAKESHAPE_KEY}`,
      },
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
