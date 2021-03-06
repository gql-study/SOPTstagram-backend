const { gql } = require('apollo-server');
const { userService } = require('../services');

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    createUser(user: UserInput): User
  }

  type User {
    _id: ID!
    name: String!
    profile: String!
    post: [Post]
  }

  type Post {
    _id: ID!
    content: String!
    images: [String!]
    user: User!
  }

  input UserInput {
    name: String!
    profile: String!
  }
`;

/*
  getAllUsers: [User]
  ```
  query {
    getAllUsers {
        _id,
        name,
        profile,
        post {
            _id,
            content,
            images
        }
  }
  ```

  createUser(user: UserInput): User
  ```
  mutation {
    createUser(user: {
        name: "jinhyung",
        profile: "backend developer"
    }){
        _id,
        name,
        profile
    }
  }
  ```
}
 */
const resolvers = {
  Query: {
    getAllUsers: async () => await userService.getAllUsers(),
  },
  Mutation: {
    createUser: async (_, args) => await userService.createUser(args),
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers,
};
