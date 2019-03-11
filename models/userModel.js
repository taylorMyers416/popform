const Sequelize = require('sequelize');
const db = require('../config/database');

const UserModel = db.define('popform', {
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: Sequelize.STRING

    },
    data: {
        type: Sequelize.JSON
    },
    submittedHistory: {
        type: Sequelize.JSON
    },
    requestForms: {
        type: Sequelize.JSON
    },
    templates: {
        type: Sequelize.JSON
    },
    recievedFroms: {
        type: Sequelize.JSON
    },
    id: {
        type: Sequelize.UUIDV4,
        validate: {
            isIPv4: true,
        }
    },
})

module.exports = UserModel;