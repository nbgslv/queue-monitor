import { gql } from 'apollo-server';

const typeDefs = gql`
  type Member {
    _id: ID!
    name: String!
    status: MemberStatus!
    createdAt: Date!
    updatedAt: Date!
  }
`;

export default typeDefs;
