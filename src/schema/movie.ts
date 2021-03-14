const typeDef = `
    type Movie {
        id: ID!
        name: String!
        duration: String!
        releaseDate: String!
        actors: String!
        averageRating: Int
    }

    type DeleteResponse {
        id: String
        deletedCount: Int
    }

    type Query {
        getMovie(id: String!): Movie!
        getAllMovies(filter: String, sortDirection: String): [Movie]
    }

    type Mutation {
        upsertMovie(id: String, name: String!, duration: String!, releaseDate: String!, actors: String!): Movie!
        deleteMovie(id: String!): DeleteResponse
    }    
`;
export default typeDef;
