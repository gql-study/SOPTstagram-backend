const { ApolloServer } = require("apollo-server");
const queries = require("./typedefs-resolvers/_queries");
const dotenv = require("dotenv");
const { posts, users } = require("./typedefs-resolvers");
const connectDB = require("./loaders/db");

dotenv.config();
connectDB();

const typeDefs = [queries, posts.typeDefs, users.typeDefs];
const resolvers = [posts.resolvers, users.resolvers];
const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
