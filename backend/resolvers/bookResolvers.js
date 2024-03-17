import {Book} from "../models/Book.js";
import {User} from "../models/User.js";
import { authCheck } from "../utils/authCheck.js";
// import { UserInputError } from "@apollo/server-express";

const bookResolvers = {
  Query: {
    async getBooks() {
      try {
        const books = await Book.find()
        return books;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getBook(_, {bookId}) {
      try {
        const book = await book.findById(bookId)
        if(book){
          return book
        } else {
          throw new Error('Book not found')
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  Mutation: {
    async addBook(_, { addBookInput: { title, author } }, context) {
      const user = authCheck(context);

      if (user.role !== "admin") {
        throw new Error("Only admin can add books");
      }

      const newbook = new Book({
        title,
        author,
        owner: user.id, 
        available: true, 
      });

      try {
        const res = await newbook.save();
        return res;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

export default bookResolvers;
