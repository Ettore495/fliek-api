import { DeleteResponse, MovieResponse } from "src/types";
import { Movie, MovieModel } from "../models";

export async function upsertMovie(
  _: void,
  args: any,
  { pubsub, userInfo }: any,
): Promise<MovieResponse> {
  // Get properties on request header
  const { id, name, duration, releaseDate, actors, averageRating } = args;

  // Populate movie model
  const movie: Movie = new MovieModel({
    _id: id,
    name,
    duration,
    releaseDate,
    actors,
    averageRating,
  });

  // Update movie model in DB
  await movie.updateOne(movie, { upsert: true });

  // Publish event
  pubsub.publish("MOVIE_CREATED", {
    movieCreated: {
      movie: movie,
      update: id ? true : false,
      user: userInfo ? userInfo : {},
    },
  });

  // Return updated movie data
  return {
    id: movie.id,
    name: movie.name,
    duration: movie.duration,
    releaseDate: movie.releaseDate,
    actors: movie.actors,
    averageRating: movie.averageRating,
  };
}

export async function getAllMovies(_: void, args: any): Promise<Movie[]> {
  let { filter, sortDirection } = args;

  if (!filter) {
    filter = "name";
  }

  return await MovieModel.find().sort({ [filter]: sortDirection });
}

export async function getMovie(_: void, args: any): Promise<MovieResponse> {
  const { id } = args;

  const movie: Movie | null = await MovieModel.findOne({ _id: id });

  if (!movie) {
    throw new Error(`No movie found matching ID: ${id}`);
  }

  return {
    id: movie.id,
    name: movie.name,
    duration: movie.duration,
    releaseDate: movie.releaseDate,
    actors: movie.actors,
    averageRating: movie.averageRating,
  };
}

export async function deleteMovie(
  _: void,
  args: any,
  { pubsub, userInfo }: any,
): Promise<DeleteResponse> {
  const { id } = args;

  const movieToDelete = await MovieModel.findOne({
    _id: id,
  });

  if (!movieToDelete) {
    throw new Error(`Please provide a valid movie id`);
  }

  const movieDeleted = await MovieModel.deleteOne({
    _id: id,
  });

  // Publish event
  pubsub.publish("MOVIE_DELETED", {
    movieDeleted: {
      movie: movieToDelete,
      update: false,
      user: userInfo ? userInfo : "",
    },
  });

  return {
    id: id,
    name: movieToDelete.name,
    deletedCount: movieDeleted.deletedCount,
  };
}
