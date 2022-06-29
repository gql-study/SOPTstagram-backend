const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: 'Comment',
    },
    post: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Post',
    },
    writer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
