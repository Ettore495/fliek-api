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
  await updateMovieAverageRating(movieId);

  return {
    userId,
    movieId,
    rating,
  };
}

export async function updateMovieAverageRating(movieId: string): Promise<any> {
  // Get movie
  const movie: Movie | null = await MovieModel.findById(movieId);

  if (!movie) {
    throw new Error("Movie could not be found");
  }

  // Find the ratings for a specific movie
  const movieRatings: Rating[] = await RatingModel.find({ movieId: movieId });

  // Sum the ratings together
  const ratingSum = movieRatings.reduce(
    (total, next) => total + next.rating,
    0,
  );

  movie.averageRating = ratingSum / movieRatings.length;
  return await movie.updateOne(movie);
}

export async function getRatings(_: void, args: any): Promise<Rating[]> {
  const { userId } = args;

  const ratings = await RatingModel.find({ userId: userId });
  return ratings;
}
