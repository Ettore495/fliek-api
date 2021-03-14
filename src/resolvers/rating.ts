import { Movie, MovieModel, Rating, RatingModel } from "../models";
import { RatingResponse } from "../types";

export async function upsertRating(
  _: void,
  args: any,
): Promise<RatingResponse> {
  const { userId, movieId, rating } = args;

  const movie: Movie | null = await MovieModel.findOne({ _id: movieId });
  if (!movie) throw new Error(`No movie found matching ID: ${movieId}`);

  const ratingExists: Rating | null = await RatingModel.findOne({
    movieId: movieId,
    userId: userId,
  });
  if (ratingExists) throw new Error("You have already rated this movie.");

  const newRating: Rating = new RatingModel({
    userId,
    movieId,
    rating,
  });

  await newRating.updateOne(newRating, { upsert: true });

  return {
    userId,
    movieId,
    rating,
  };
}
