import { gql } from 'apollo-server';

const typeDefs = gql`
  enum MemberStatus {
    WAITING
    SERVED
    PASSED
  }

  type Member {
    _id: ID!
    firstName: String!
    lastName: String
    queue: ID!
    phoneNumber: String
    number: Number!
    status: MemberStatus!
    position: ID
    createdAt: Date!
    updatedAt: Date!
  }
`;

export default typeDefs;
