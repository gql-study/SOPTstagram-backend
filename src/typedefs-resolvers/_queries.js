const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: Post
    users(_id: ID): [User]
    comments(_id: ID): [ResponseComment]
    childComments(_id: ID): [ResponseComment]
  }
`;

module.exports = typeDefs;
