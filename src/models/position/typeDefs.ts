import { gql } from 'apollo-server';

const typeDefs = gql`
  enum PositionStatus {
    ACTIVE
    INACTIVE
  }

  type Member {
    _id: ID!
    name: String!
    status: PositionStatus!
    createdAt: Date!
    updatedAt: Date!
  }
`;

export default typeDefs;
