import { currentUser, register, login } from "./auth";
import { upsertMovie, getAllMovies, getMovie, deleteMovie } from "./movie";
import { upsertRating, getRatings } from "./rating";

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
};

export default resolverMap;
