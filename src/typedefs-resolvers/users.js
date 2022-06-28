const { gql } = require("apollo-server");
const { userService } = require("../services");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    intro: String!
  }

  input UserInput {
    _id: ID!
    name: String!
    intro: String!
  }
`;

const resolvers = {
  Query: {
    getAllUsers: async () => await userService.getAllUsers()
  },
  Mutation: {
    createUser: async (_, args) => await userService.createUser(args)
  }
}

module.exports = {
  typeDefs: typeDefs,
  resolvers
};
