const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  type: { type: String, required: true },
  questionText: { type: String, required: true },
  questionOptions: { type: Array, required: true},
  answerKey: {type: String, required: true},
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;