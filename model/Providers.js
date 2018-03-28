const models = {};
const config = require('../config/sequelize');

const User = require('../model/User')(config.sequelize, config.Sequelize);
const Guide = require('../model/Guide')(config.sequelize,config.Sequelize);
const Task = require('../model/Task')(config.sequelize, config.Sequelize);
const Activities = require('../model/Activities')(config.sequelize, config.Sequelize);
const Task_Activities = require('../model/Task_Activities')(config.sequelize, config.Sequelize);
const Task_Places = require('../model/Task_Places')(config.sequelize,config.Sequelize);
const Trip =  require('../model/Trip')(config.sequelize, config.Sequelize);
const Schedule = require('../model/Schedule')(config.sequelize,config.Sequelize);
const Languges = require('../model/Languges')(config.sequelize,config.Sequelize);
const Places = require('../model/Places')(config.sequelize,config.Sequelize);
const Places_Activities = require('../model/Place_Activities')(config.sequelize,config.Sequelize);
const Task_Languages = require('../model/Task_Languages')(config.sequelize,config.Sequelize);
const Languages_guide = require('../model/Languages_guides')(config.sequelize,config.Sequelize);
const Trips_Places = require('../model/Trips_Places')(config.sequelize,config.Sequelize);
const User_Trip = require('./User_Trip')(config.sequelize,config.Sequelize);

/* DEFIND MODEL */
models.User = User;
models.Guide = Guide;
models.Task =Task;
models.Activities = Activities;
models.Task_Activities = Task_Activities;
models.Task_Places = Task_Places;
models.Trip = Trip;
models.Schedule = Schedule;
models.Languages = Languges;
models.Places = Places;
models.Places_Activities = Places_Activities;
models.Task_Languages = Task_Languages;
models.Languages_guide = Languages_guide;
models.Trips_Places = Trips_Places;
models.Booking = User_Trip;


/* Relations */
/*********************USER Hasmany TASK *****************/
models.User.hasMany(models.Task,{foreignKey: 'user_id'});
models.Task.belongsTo(models.User,{foreignKey: 'user_id'});

/*********************Many To Many*****************/
models.User.belongsToMany(models.Trip,{through:models.User_Trip,foreignKey:'user_id',otherKey:'trip_id'});
models.Trip.belongsToMany(models.User,{through:models.User_Trip,foreignKey:'user_id',otherKey:'trip_id'});
models.Booking.hasOne(models.Trip,{foreignKey:'id'});
models.Booking.belongsTo(models.Trip,{foreignKey:'trip_id'});
models.Task.belongsToMany(models.Activities, { through:models.Task_Activities, foreignKey: 'task_id', otherKey: 'activitie_id' });
models.Task.belongsToMany(models.Places, { through:models.Task_Places, foreignKey: 'task_id', otherKey: 'place_id' });
models.Activities.belongsToMany(models.Task, {  through:models.Task_Activities, foreignKey: 'activitie_id', otherKey: 'task_id' });
models.Guide.hasMany(models.Trip,{foreignKey:'id'});
models.Trip.belongsTo(models.Guide,{foreignKey:'creater_id'});
models.Trip.hasMany(models.Schedule,{foreignKey:'trip_id'});
models.Schedule.belongsTo(models.Trip,{foreignKey:'trip_id'});
models.Activities.belongsToMany(models.Places,{through:models.Places_Activities,foreignKey:'activities_id'});
models.Places.belongsToMany(models.Activities,{through:models.Places_Activities,foreignKey:'place_id'});
models.Task.belongsToMany(models.Languages,{through:models.Task_Languages,foreignKey:'task_id'});
models.Languages.belongsToMany(models.Task,{through:models.Task_Languages,foreignKey:'language_id'});
models.Languages.belongsToMany(models.Guide,{through:models.Languages_guide,foreignKey:'languages_id'});
models.Guide.belongsToMany(models.Languages,{through:models.Languages_guide,foreignKey:'guide_id'});
models.Places.belongsToMany(models.Trip,{through:models.Trips_Places,foreignKey:'place_id'});
models.Trip.belongsToMany(models.Places,{through:models.Trips_Places,foreignKey:'trip_id'});

module.exports = models;
