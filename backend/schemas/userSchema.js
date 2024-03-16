export const typeDefs = `#graphql
    type User {
    id: ID!
    username: String!
    email: String!
    role: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    logout: Boolean!
  }
`;
