const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    createComment(comment: CreateCommentInput!): Comment!
  }
`;

module.exports = typeDefs;
