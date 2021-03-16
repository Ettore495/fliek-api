const typeDef = `
    type User {
        id: ID!
        firstname: String!
        lastname: String!
        username: String!
    }

    type Query {
        currentUser: User!
    }

    type LoginResponse {
        token: String
        id: String
        firstname: String
        lastname: String
        username: String
    }

    type Mutation {
        register(firstname: String!, lastname: String!, username: String!, password: String!): User!
        login(username: String!, password: String!): LoginResponse!
    }    
`;
export default typeDef;
