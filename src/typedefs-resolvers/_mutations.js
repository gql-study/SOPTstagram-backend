const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    createPost(input: CreatePostInput!): Post!
    createUser(input: UserInput): User!
  }
`;

module.exports = typeDefs;
