import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as Provider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://api.spacex.land/graphql/'
});

export const ApolloProvider: React.FC = (
  { children }
) => (
  <Provider client={client}>
    {children}
  </Provider>
);