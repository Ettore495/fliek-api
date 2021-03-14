import mongoose from "mongoose";

export interface Rating extends mongoose.Document {
  userId: string;
  movieId: string;
  rating: string;
}

const RatingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    movieId: { type: String, required: true },
    rating: { type: String, required: true },
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
