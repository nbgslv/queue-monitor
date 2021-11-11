// GraphQL globals
import { gql } from 'apollo-server';

const globalTypeDefs = gql`
  type ListMetadata {
    count: Int!
  }

  type total {
    total: Int!
  }

  scalar Date
`;

export default globalTypeDefs;
