import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserInputError } from "@apollo/server-express";
import { User } from "../models/User.js";
import { validateLoginInput, validateRegisterInput } from "../utils/validateUser.js";

const userResolvers = {
  Mutation: {
    async register(_, { registerInput: { username, email, password } }) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError("Email already exits", {
          errors: {
            email: "This email already in use",
          },
        });
      }

      password = await bcrypt.hash(password, 10);

      const newUser = new User({ username, email, password });
      const res = await newUser.save();
      const token = jwt.sign(
        { id: res.id, email: res.email, username: res.username },
        process.env.ADMIN
      );
      return { ...res._doc, id: res._id, token };
    },

    async login(_, { loginInput: { email, password } }) {
      const { valid, errors } = validateLoginInput(email, password);
        if(!valid){
            throw new UserInputError("Errors", { errors });
        }

      const user = await User.findOne({ email });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        errors.general = "Wrong credentails";
        throw new UserInputError("Wrong credentials", { errors });
      }

      const token = jwt.sign({ id: user.id }, process.env.USER);

        return {
          ...user._doc,
          id: user._id,
          token,
        };
    },
  },
};

export default userResolvers;
