const Comment = require('../models/Comment');
const dayjs = require('dayjs');

const createComment = async (args) => {
  try {
    const { content, post, parent, writer } = args.comment;
    const comment = new Comment({
      content: content,
      post: post,
      parent: parent,
      writer: writer,
    });

    await comment.save();

    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getComments = async (postId) => {
  try {
    const comments = await Comment.find({
      post: postId,
      parent: null,
    })
      .populate('writer')
      .sort({ createdAt: -1 });

    const data = await Promise.all(
      comments.map((comment) => {
        const result = {
          _id: comment._id,
          writer: comment.writer.name,
          writerProfile: comment.writer.profile,
          content: comment.content,
          date: `${dayjs(new Date()).diff(comment.createdAt, 'hour')}`,
        };
        return result;
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getChildComments = async (commentId) => {
  try {
    const comments = await Comment.find({
      parent: commentId,
    })
      .populate('writer')
      .sort({ createdAt: -1 });

    const data = await Promise.all(
      comments.map((comment) => {
        const result = {
          _id: comment._id,
          writer: comment.writer.name,
          writerProfile: comment.writer.profile,
          content: comment.content,
          date: `${dayjs(new Date()).diff(comment.createdAt, 'hour')}`,
        };
        return result;
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteComment = async (commentId) => {
  try {
    const comment = await Comment.findByIdAndDelete(commentId);

    if (!comment) {
      return null;
    }

    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = {
  createComment,
  getComments,
  getChildComments,
  deleteComment,
};
