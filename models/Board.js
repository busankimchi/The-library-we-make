const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const BoardSchema=new Schema({
    title:{
        type: String,
        default: "책주떼욤"
    },
    content:{
        type: String,
        default: "췍췍"
    },
    user:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Board = mongoose.model("boards", BoardSchema);