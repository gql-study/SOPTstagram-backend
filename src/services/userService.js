const User = require("../models/User")

const getAllUsers = async () => {
    try {
        return await User.find({})
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createUser = async (args) => {
    const { name, intro } = args.user;

    try {
        const user = new User({ name, intro })
        await user.save();

        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getUserByName = async (userName) => {
    try {
        return await User.findOne({ "name" : userName });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createUser, getAllUsers, getUserByName }