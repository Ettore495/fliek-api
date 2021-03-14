const typeDef = `
    type Movie {
        id: ID!
        name: String!
        duration: String!
        releaseDate: String!
        actors: String!
        rating: Int
    }

    type Query {
        getMovie(id: String!): Movie!
        getAllMovies: [Movie]
    }

    type Mutation {
        upsertMovie(id: String, name: String!, duration: String!, releaseDate: String!, actors: String!, rating: Int): Movie!
        deleteMovie(id: String!): Boolean
    }    
`;
export default typeDef;
