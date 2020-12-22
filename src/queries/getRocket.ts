import { gql } from 'apollo-boost';

export const GET_ROCKET = gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      company
      country
      description
      id
      name
      type
      wikipedia
    }
  }
`;