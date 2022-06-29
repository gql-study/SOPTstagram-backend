const { ApolloServer } = require('apollo-server');
const queries = require('./typedefs-resolvers/_queries');
const mutations = require('./typedefs-resolvers/_mutations');
const dotenv = require('dotenv');
const { posts, users, comments } = require('./typedefs-resolvers');
const connectDB = require('./loaders/db');

dotenv.config();
connectDB();

const typeDefs = [
  queries,
  mutations,
  users.typeDefs,
  posts.typeDefs,
  comments.typeDefs,
];
const resolvers = [users.resolvers, posts.resolvers, comments.resolvers];
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
