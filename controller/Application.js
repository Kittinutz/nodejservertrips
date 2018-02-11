

const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');

exports.getactivities = function (req,res,next) {
        models.Activities.findAll({
            attributes:['id','name']
        }).then(activities=>{
            res.send(activities);
        })
};

exports.getlanguages = function (req,res,next) {
    models.Languages.findAll({
        attributes:['id',['languages','name']]
    }).then(languages=>{
        res.send(languages);
})
};
exports.gettrip = function (req,res,next) {
    models.Trip.findAll().then(response=>{
        res.send(response)
    })
};
exports.postapplication = function (req,res,next) {
    console.log(req.body);
};

exports.getripbbyid = function (req,res,next) {
    var id = req.params.id;
    models.Trip.findOne({
        where:{id:id},
        include: [{
            model: models.Guide,
            attributes: ['name', 'email', 'gender']

        },{
            model:models.Schedule
        }]
    }).then(response=>{
        res.send(response)
    })
};
