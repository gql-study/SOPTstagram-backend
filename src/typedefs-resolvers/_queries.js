const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    posts: Post

    users(_id: ID): [User]
  }
`;

module.exports = typeDefs;
