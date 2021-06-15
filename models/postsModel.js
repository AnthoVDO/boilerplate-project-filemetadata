const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    process.env.DBCLUSTER,
    {
        "name": {
            type:String,
            required:true
        },
        type:{
            type:String,
            required: true
        },
        size:{
            type:String,
            required:true
        }
    },
    "posts"
)

module.exports = {PostsModel};