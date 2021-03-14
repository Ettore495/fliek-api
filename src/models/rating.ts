import mongoose from "mongoose";

export interface Rating extends mongoose.Document {
  userId: string;
  movieId: string;
  rating: number;
}

const RatingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    movieId: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    versionKey: false,
  },
);

export const RatingModel = mongoose.model<Rating>(
  "Rating",
  RatingSchema,
  "Ratings",
);
