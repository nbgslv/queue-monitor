import { gql } from 'apollo-server';

const typeDefs = gql`
  enum QueueStatus {
    ACTIVE
    INACTIVE
  }

  type Queue {
    _id: ID!
    name: String!
    active: Boolean!
    status: QueueStatus!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Mutation {
    createNewQueue(queueName: String!): Boolean
  }
`;

export default typeDefs;
