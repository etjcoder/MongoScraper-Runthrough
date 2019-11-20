var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CardSchema = new Schema({
    front: {
        type: String,
        required: true,
        unique: true,
        default: "Please Skip this Card"
    },
    back: {
        type: String,
        required: true,
        unique: true,
        default: "Please Skip this Card"
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

var Card = mongoose.model("Card", CardSchema);

module.exports = Card;