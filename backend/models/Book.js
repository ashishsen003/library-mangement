import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  available: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: 'User', },
});

export const Book = mongoose.model('Book', bookSchema);
