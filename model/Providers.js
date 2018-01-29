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
/*********************USER Hasmany TASK *****************/
models.User.hasMany(models.Task,{foreignKey: 'user_id'});
models.Task.belongsTo(models.User,{foreignKey: 'user_id'});

/*********************Many To Many*****************/
// models.Activities.hasMany(models.Task_Activities,{foreignKey: 'activitie_id'});
// models.Task.hasMany(models.Task_Activities,{foreignKey:'task_id'});
// models.Task_Activities.belongsTo(models.Task,{foreignKey: 'task_id'});
// models.Task_Activities.belongsTo(models.Activities,{foreignKey:'activitie_id'});
models.Taskcatagory = models.Task.belongsToMany(models.Activities, { as: 'activities', through: 'tasks_activities', foreignKey: 'task_id', otherKey: 'activitie_id' });
models.Activities.belongsToMany(models.Task, { as: 'task', through: 'tasks_activities', foreignKey: 'activitie_id', otherKey: 'task_id' });



module.exports = models
