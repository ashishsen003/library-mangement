import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String,
    default: 'user', 
    enum: ['user', 'admin'], 
  },
});

export const User = mongoose.model('User', userSchema);
