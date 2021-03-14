import { currentUser, register, login } from "./auth";
import { upsertMovie, getAllMovies, getMovie, deleteMovie } from "./movie";
import { upsertRating } from "./rating";

const resolverMap = {
  Query: {
    currentUser,
    getAllMovies,
    getMovie,
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
