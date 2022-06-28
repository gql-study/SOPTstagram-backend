const Post = require("../models/Post")
const UserService = require("./userService")

const getAllPost = async () => {
    try {
        return await Post.find({})
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createPost = async (args) => {
    try {
        const { content, images, userName } = args.post;
        console.log("args.post: ", args.post);
        const userObj = await UserService.getUserByName(userName);
        const user = userObj._id;
        console.log("userObj: ", userObj);
        const post = new Post({ images, content, user })

        console.log(">>>>>>>>>>>>>>>", post);

        await post.save()

        return post
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createPost, getAllPost }