export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
    owner: ID!
    available: Boolean!
  }

  type Query {
    # allBooks: [Book!]!
    books: [Book!]!
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    borrowBook(bookId: ID!): Book!
    buyBook(bookId: ID!): Book!
    approveBorrowRequest(requestId: ID!): Book!
  }
`;
