const { ApolloServer } = require("apollo-server");
const queries = require("./typedefs-resolvers/_queries");
const mutations = require("./typedefs-resolvers/_mutations");
const dotenv = require("dotenv");
const connectDB = require("./loaders/db");

dotenv.config();
connectDB();

// const typeDefs = [queries, mutations];
// const resolvers = [];
// const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
