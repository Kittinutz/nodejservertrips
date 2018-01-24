const models = {};
const config = require('../config/sequelize');

const User = require('../model/User')(config.sequelize, config.Sequelize);


/* DEFIND MODEL */
models.User = User;


/* Relations */



module.exports = models