const mongoose = require('mongoose');
const config = require('../config');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);

    console.log('Mongoose Connected ...');

    User.createCollection().then(function (collection) {
      console.log('User Collection is created!');
    });

    Post.createCollection().then(function (collection) {
      console.log('Post Collection is created!');
    });

    Comment.createCollection().then(function (collection) {
      console.log('Comment Collection is created!');
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
