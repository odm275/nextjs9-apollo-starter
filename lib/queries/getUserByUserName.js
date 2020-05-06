import gql from 'graphql-tag';

export const GET_USER_BY_USER_NAME = gql`
  query FindUserByUsername($username: String!){
    findUsersByUsername(username: $username){
      username
      email
    }
  }
`;