import mongoose from "mongoose";

export interface Movie extends mongoose.Document {
  _id: string;
  name: string;
  releaseDate: string;
  duration: string;
  actors: string;
  rating: number;
}

const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    releaseDate: { type: String, required: true },
    duration: { type: String, required: true },
    actors: { type: String, required: true },
    rating: { type: String, required: false },
  },
  {
    versionKey: false,
  },
);

export const MovieModel = mongoose.model<Movie>("Movie", MovieSchema, "Movies");
