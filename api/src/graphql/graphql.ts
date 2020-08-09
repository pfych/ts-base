import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from '../../schema.graphql';
import { TimeResponse } from '../gql-types';
import getTime from '../time-gql/time';

const resolvers = {
  Query: {
    time: (): TimeResponse => getTime(),
  },
};

export const handler = new ApolloServer({
  typeDefs,
  resolvers,
}).createHandler();
