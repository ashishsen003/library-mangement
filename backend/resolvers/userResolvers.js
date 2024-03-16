import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import { UserInputError } from 'apollo-server-express';
import {User} from '../models/User.js';

const userResolvers = {
  Mutation: {
    async login(_, { loginInput: { email, password } }) {
      const user = await User.findOne({ email });

      if (!user) {
        throw new UserInputError('User not found');
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        throw new UserInputError('Invalid credentials');
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};

export default userResolvers;
