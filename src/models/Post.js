const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        images: {
            type: [String],
            default: [],
        },
        content: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
