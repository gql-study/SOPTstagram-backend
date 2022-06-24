import { PubSub } from 'apollo-server';

const pubsub = new PubSub();

/**
 * extractInput - extracts the actual input payload from the graphql input
 * in case no input was provided, the function returns an empty JSON object
 *
 * @param {*} args
 */
let getQuery = function (args) {
  return args.query ? args.query : {};
};

let getInput = function (args) {
  return args.input ? args.input : {};
};

export default {
  Query: {
    user: (parent, args, { db }, info) => db.getUser(args, info),
    post: (parent, args, { db }, info) => db.getPost(args, info),
    comment: (parent, args, { db }, info) => db.getComment(args, info),
  },
};
