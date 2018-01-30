const models = require('../model/Providers');
const config = require('../config/sequelize');
const Op = config.Sequelize.Op;
const TaskAct = models.Activities.hasMany(models.Task_Activities,{as:'taskactivities', foreignKey: 'id'});

exports.CreateTask = function (req,res,next) {

    models.Task.create({

        user_id: '1',
        appointment:'2018-08-08',

    }).then(user=>{
        user.setActivities([1,2]).then(value=>{
            console.log(value);
    });
    });

}