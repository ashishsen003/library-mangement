export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
    owner: ID!
    available: Boolean!
  }

  type Query {
    getBooks: [Book!]!
    getBook(BookId: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    deleteBook(bookId: ID!): String!

    # borrowBook(bookId: ID!): Book!
    # buyBook(bookId: ID!): Book!
    # approveBorrowRequest(requestId: ID!): Book!
  }
`;
