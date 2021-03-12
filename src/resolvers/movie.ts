import { MovieResponse } from "src/types";
import { Movie, MovieModel } from "../models";

export async function createMovie(_: void, args: any): Promise<Movie> {
  // Get properties on request header
  const { name, duration, releaseDate, actors, rating } = args;

  // Populate movie model
  const movie: Movie = new MovieModel({
    name,
    duration,
    releaseDate,
    actors,
    rating,
  });

  // Save movie model to DB
  return await movie.save();
}

export async function updateMovie(_: void, args: any): Promise<MovieResponse> {
  // Get properties on request header
  const { id, name, duration, releaseDate, actors, rating } = args;

  // Populate movie model
  const movie: Movie = new MovieModel({
    _id: id,
    name,
    duration,
    releaseDate,
    actors,
    rating,
  });

  // Update movie model in DB
  await movie.updateOne(movie);

  // Return updated movie data
  return {
    id: movie.id,
    name: movie.name,
    duration: movie.duration,
    releaseDate: movie.releaseDate,
    actors: movie.actors,
    rating: movie.rating,
  };
}
