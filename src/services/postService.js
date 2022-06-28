const Post = require("../models/Post")

const createPost = async (args) => {
    try {
        const images = ["", "", "", "", "", "", "", ""]
        const post = new Post({ ...args.input, user: {}, images })

        await post.save()

        return post
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createPost }