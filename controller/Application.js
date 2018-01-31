

const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');

exports.getactivities = function (req,res,next) {
        models.Activities.findAll({
            attributes:['id','name']
        }).then(activities=>{
            res.send(JSON.stringify(activities));
        })
};

exports.getlanguages = function (req,res,next) {
    models.Languages.findAll({
        attributes:['id','languages']
    }).then(languages=>{
        res.send(languages);
})
};