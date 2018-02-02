

const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');

exports.getactivities = function (req,res,next) {
        models.Activities.findAll({
            attributes:['id',['name','label']]
        }).then(activities=>{
            res.send(JSON.stringify(activities));
        })
};

exports.getlanguages = function (req,res,next) {
    models.Languages.findAll({
        attributes:['id','name']
    }).then(languages=>{
        res.send(languages);
})
};