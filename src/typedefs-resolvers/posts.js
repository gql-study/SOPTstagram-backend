const { gql } = require("apollo-server");
const { postService } = require("../services");
const typeDefs = gql`
    type Query {
        getAllPosts: [Post]
    }
    
    type Post {
        _id: ID!
        content: String!
        images: [String!]
        user: User!
    }

    input CreatePostInput {
        content: String!
        images: [String!]
        user: UserInput
    }
`

/*
    getAllPosts: [Post]
    ```
    query {
    getAllPosts {
        _id,
        content,
        images,
        user {
            _id,
            name,
            intro,
        }
    }
    ```
}
 */
const resolvers = {
    Query: {
        getAllPosts: async () => await postService.getAllPost(),
    },
    Mutation: {
        createPost: async (_, args) => await postService.createPost(args)
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}