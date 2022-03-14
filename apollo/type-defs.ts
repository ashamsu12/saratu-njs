import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    salt: String!
    fullname: String!
  }

  type Portfolio {
    id: ID!
    name: String!
    description: String!
    type: String!
    link: String!
    image_url: String!
  }

  input SignUpInput {
    email: String!
    password: String!
    fullname: String!
  }

  input ItemInput {
    name: String!
    description: String!
    type: String!
    link: String!
    image_url: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type SignUpPayload {
    user: User!
  }

  type SignInPayload {
    user: User!
  }

  type CreateItemPayload {
    item: Portfolio!
  }
  
  type Query {
    user(id: ID!): User!
    users: [User]!
    items:[Portfolio]!
    viewer: User
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    addPortfolioItem(input:ItemInput!):CreateItemPayload!
    signOut: Boolean!
  }
`
