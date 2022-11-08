const {Schema, model} = require("mongoose")

const reviewSchema = new Schema({
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    player: {
        type: Schema.Types.ObjectId,
        ref: "Player"
    }
})



module.exports = model("Review", reviewSchema)