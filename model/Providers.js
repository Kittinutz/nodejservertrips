const models = {};
const config = require('../config/sequelize');

const User = require('../model/User')(config.sequelize, config.Sequelize);
const Guide = require('../model/Guide')(config.sequelize,config.Sequelize);
const Task = require('../model/Task')(config.sequelize, config.Sequelize);
const Activities = require('../model/Activities')(config.sequelize, config.Sequelize);
const Task_Activities = require('../model/Task_Activities')(config.sequelize, config.Sequelize);
/* DEFIND MODEL */
models.User = User;
models.Guide = Guide;
models.Task =Task;
models.Activities = Activities;
models.Task_Activities = Task_Activities;

/* Relations */
models.User.hasMany(models.Task,{foreignKey: 'user_id'});

models.Task.belongsTo(models.User,{foreignKey: 'user_id'});

models.Activities.belongsTo(models.Task,{through:'models.Task_Activities',foreignKey: 'activitie_id'});
models.Task.belongsTo(models.Activities,{through:'models.Task_Activities',foreignKey: 'task_id'});

module.exports = models