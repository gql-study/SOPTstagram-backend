const { gql } = require("apollo-server");
const { userService } = require("../services");

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
  }

  type User {
    _id: ID!
    name: String!
    intro: String!
    post: [Post]
  }
  
  type Post {
    _id: ID!
    content: String!
    images: [String!]
    user: User!
  }

  input UserInput {
    _id: ID!
    name: String!
    intro: String!
  }
`;

/*
  getAllUsers: [User]
  ```
  query {
    getAllUsers {
        _id,
        name,
        intro,
        post {
            _id,
            content,
            images
        }
    }
  ```
}
 */
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
