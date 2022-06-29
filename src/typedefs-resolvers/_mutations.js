const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    createComment(comment: CreateCommentInput!): Comment!
    deleteComment(_id: ID): Comment!
  }
`;

module.exports = typeDefs;
