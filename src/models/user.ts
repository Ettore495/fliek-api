import mongoose from "mongoose";

export interface User extends mongoose.Document {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

export const UserModel = mongoose.model<User>("User", UserSchema, "Users");
