import { gql } from 'apollo-server';
import globalTypeDefs from './index';
import queueTypeDefs from './queue/typeDefs';
import memberTypeDefs from './member/typeDefs';
import positionTypeDefs from './position/typeDefs';

const linkSchema = gql`
  type Subscription {
    _: Boolean
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

const typeDefs = [linkSchema, globalTypeDefs, queueTypeDefs, memberTypeDefs, positionTypeDefs];

export default typeDefs;
