import { currentUser, register, login } from "./auth";
import { upsertMovie, getAllMovies, getMovie, deleteMovie } from "./movie";
import { upsertRating, getRatings } from "./rating";
import { MovieSubscriptionKeys } from "../models/movieSubscriptionKeys";

const resolverMap = {
  Query: {
    currentUser,
    getAllMovies,
    getMovie,
    getRatings,
  },
  Mutation: {
    login,
    register,
    upsertMovie,
    deleteMovie,
    upsertRating,
  },
  Subscription: {
    movieCreated: {
      subscribe: (_: void, _1: void, { pubsub }: any) =>
        pubsub.asyncIterator(MovieSubscriptionKeys.MOVIE_CREATED),
    },
  },
};

export default resolverMap;
