const Sequelize = require('sequelize');
const db = require('../config/database');

const QuestionModel = db.define('gig', {
  type: {
    type: Sequelize.STRING
  },
  question: {
    type: Sequelize.JSON
  },
  key: {
    type: Sequelize.STRING
  },
  id: {
    type: Sequelize.UUIDV4,
    validate: {
        isIPv4: true,
    }
  },
})

module.exports = QuestionModel;