const typeDef = `
    type Rating {
        userId: String!
        movieId: String!
        rating: Int!
    }

    type Query {
        getRatings(userId: String!): [Rating]
    }

    type Mutation {
        upsertRating(userId: String!, movieId: String!, rating: Int!): Rating!
    }    
`;
export default typeDef;
