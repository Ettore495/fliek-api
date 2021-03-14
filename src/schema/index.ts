import Auth from "./auth";
import Movie from "./movie";
import Rating from "./rating";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefs = [Auth, Movie, Rating];

// Merge the schemas together so we dont have multiple mutation | query properties
export default mergeTypeDefs(typeDefs);
