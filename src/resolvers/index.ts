import { currentUser, register, login } from "./auth";
import { createMovie, updateMovie } from "./movie";

const resolverMap = {
  Query: {
    currentUser,
  },
  Mutation: {
    login,
    register,
    createMovie,
    updateMovie,
  },
};

export default resolverMap;
