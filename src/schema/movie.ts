const typeDef = `
    type Movie {
        id: ID!
        name: String!
        duration: String!
        releaseDate: String!
        actors: String!
        averageRating: Float
    }

    type DeleteResponse {
        id: String
        name: String
        deletedCount: Int
    }

    type MoviePublishResponse {
        movie: Movie
        update: Boolean
        user: User
    }

    type Query {
        getMovie(id: String!): Movie!
        getAllMovies(filter: String, sortDirection: String): [Movie]
    }

    type Mutation {
        upsertMovie(id: String, name: String!, duration: String!, releaseDate: String!, actors: String!): Movie!
        deleteMovie(id: String!): DeleteResponse
    }
    
    type Subscription {
        movieCreated: MoviePublishResponse
        movieDeleted: MoviePublishResponse
    }
`;
export default typeDef;
