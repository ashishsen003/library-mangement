import {Book} from "../models/Book.js";
import {User} from "../models/User.js";
// import { UserInputError } from "apollo-server-express";

const bookResolvers = {
  Query: {
    books: async () => {
      try {
        const books = await Book.find()
        // .populate("owner");
        return books;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addBook: async (_, { addBookInput: { title, author } }, context) => {
      const user = checkAuth(context);

      if (user.role !== "admin") {
        throw new Error("Only admin can add books");
      }

      const book = new Book({
        title,
        author,
        owner: user.id, 
        available: true, 
      });

      try {
        const res = await book.save();
        return res;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default bookResolvers;
