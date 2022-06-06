import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const LOGIN: DocumentNode = gql`
  mutation Login($data: LoginOptions!) {
    login(data: $data) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;

export const GETLISTING: DocumentNode = gql`
  query GetListing($id: Float!) {
    getListing(id: $id) {
      price
      description
      postedBy {
        id
        username
        email
      }
    }
  }
`;
