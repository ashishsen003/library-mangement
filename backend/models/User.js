import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  {timestamps: true}
);

export const User = mongoose.model("User", userSchema);
