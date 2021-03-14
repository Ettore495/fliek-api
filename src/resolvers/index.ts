import { currentUser, register, login } from "./auth";
import { upsertMovie, getAllMovies, getMovie, deleteMovie } from "./movie";

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
  },
};

export default resolverMap;
