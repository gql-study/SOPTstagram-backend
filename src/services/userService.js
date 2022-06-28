const User = require("../models/User")

const createUser = async (args) => {
    try {
        const user = new User({ ...args.input })
        await user.save();

        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createUser }