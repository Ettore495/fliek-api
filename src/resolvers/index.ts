import { currentUser, register, login } from "./auth";
import { createMovie, updateMovie, getAllMovies, getMovie } from "./movie";

const resolverMap = {
  Query: {
    currentUser,
    getAllMovies,
    getMovie,
  },
  Mutation: {
    login,
    register,
    createMovie,
    updateMovie,
  },
};

export default resolverMap;
