const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    question: {type : ObjectId, ref: 'Question'},
    user: {type : ObjectId, ref: 'User'},
    value: {type: String, required: true},
    answerKey: {type: String, required: true},
     
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;