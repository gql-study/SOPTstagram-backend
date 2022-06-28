const { gql } = require("apollo-server");
const { postService } = require("../services");
const typeDefs = gql`
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

const resolvers = {
    Mutation: {
        createPost: async (_, args) => await postService.createPost(args)
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}