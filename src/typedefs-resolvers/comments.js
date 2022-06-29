const { gql } = require('apollo-server');
const { commentService } = require('../services');

const typeDefs = gql`
  type Comment {
    _id: ID!
    content: String!
    post: ID!
    parent: ID
    writer: ID!
  }

  type ResponseComment {
    _id: ID!
    writer: ID!
    writerProfile: String!
    content: String!
    """
    현재시간과 댓글을 올린 시간의 차이
    """
    date: String!
  }

  input CreateCommentInput {
    content: String!
    post: ID!
    parent: ID
    writer: ID!
  }
`;

const resolvers = {
  Query: {
    comments: async (_, args) => await commentService.getComments(args._id),
    childComments: async (_, args) =>
      await commentService.getChildComments(args._id),
  },
  Mutation: {
    createComment: async (_, args) => await commentService.createComment(args),
    deleteComment: async (_, args) =>
      await commentService.deleteComment(args._id),
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
