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
`;

export default typeDefs;
