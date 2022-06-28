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
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
