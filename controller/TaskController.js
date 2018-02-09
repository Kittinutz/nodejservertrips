const models = require('../model/Providers');
const config = require('../config/sequelize');
const Op = config.Sequelize.Op;
const TaskAct = models.Activities.hasMany(models.Task_Activities,{as:'taskactivities', foreignKey: 'id'});

exports.CreateTask = function (req,res,next) {

    models.Task.create({

        user_id: '1',
        appointment:req.body.date,
        numberofperson:req.body.numberofPerson
    }).then(user=>{
        user.setActivities(req.body.activities);
        user.setLanguages(req.body.languages);
  
    });

}
