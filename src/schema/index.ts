import Auth from "./auth";
import Movie from "./movie";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefs = [Auth, Movie];

// Merge the schemas together so we dont have multiple mutation | query properties
export default mergeTypeDefs(typeDefs);
