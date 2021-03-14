import { currentUser, register, login } from "./auth";
import { upsertMovie, getAllMovies, getMovie } from "./movie";

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
  },
};

export default resolverMap;
