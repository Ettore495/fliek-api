const typeDef = `
    type Movie {
        id: ID!
        name: String!
        duration: String!
        releaseDate: String!
        actors: String!
        rating: Int
    }

    type Mutation {
        createMovie(name: String!, duration: String!, releaseDate: String!, actors: String!, rating: Int): Movie!
        updateMovie(id: String!, name: String!, duration: String!, releaseDate: String!, actors: String!, rating: Int): Movie!
    }    
`;
export default typeDef;
