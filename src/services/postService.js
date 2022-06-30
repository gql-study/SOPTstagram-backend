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
        const images = [
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/04522a265b52a2f836b6c66a2c094865.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/1.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/11eb7f7ebc1a465fada64869ff0cad4c.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/2.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/20201128181942.1233149.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/5a0bc34578a84d06a156809701d4bfd9.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/80aef3a2152930cd90f0cfc5e131c02d_res.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/e6aabb8f6f4e62aa402753b4dab8fd73_res.jpeg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/humor_6422311.jpg",
            "https://testbygunmo.s3.ap-northeast-2.amazonaws.com/images.jpg"
        ]
        const post = new Post({ ...args.input, user: {}, images })
        const { content, userName } = args.post;
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