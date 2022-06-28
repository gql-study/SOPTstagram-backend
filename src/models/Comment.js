const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        parent: {
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
