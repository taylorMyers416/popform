const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  proprietor: { type: String, required: true },
  blank: { type: String, required: true },
  answers: [{ type : ObjectId, ref: 'Answers' }],
  submittedBy: { type: ObjectId, ref: 'User', required: true},
  dateSubmitted: {type: Date, default: Date.now},
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;

