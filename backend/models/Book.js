import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: String, required: true},
    
    available: { type: Boolean, default: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {timestamps: true}
);

export const Book = mongoose.model("Book", bookSchema);
