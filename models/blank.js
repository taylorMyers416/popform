const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  creator: { type: ObjectId, ref: 'User', required: true},
  private: {type: Boolean,required: true},
  questions: [{ type : ObjectId, ref: 'Questions' }]
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
