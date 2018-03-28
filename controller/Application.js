const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');
const socket = require('../index');
exports.getactivities = function (req, res, next) {
    models.Activities.findAll({
        attributes: ['id', 'name']
    }).then(activities => {
        res.send(activities);
    })
};

exports.getlanguages = function (req, res, next) {
    models.Languages.findAll({
        attributes: ['id', ['languages', 'name']]
    }).then(languages => {
        res.send(languages);
    })
};
exports.getPlaces = function (req, res, next) {
    models.Places.findAll({
        attributes: ['id', ['name_place', 'name']]
    }).then(places => {
        res.send(places);
    })

};
exports.gettrip = function (req, res, next) {
    models.Trip.findAll().then(response => {
        res.send(response)
    })
};
exports.postapplication = function (req, res, next) {
    console.log(req.body);
};

exports.getripbbyid = function (req, res, next) {
    var id = req.params.id;
    models.Trip.findOne({
        where: {id: id},
        include: [{
            model: models.Guide,
            attributes: ['name', 'surname', 'email', 'gender']

        }, {
            model: models.Schedule
        }]
    }).then(response => {
        res.send(response)
    })
};
exports.getguide = function (req, res, next) {
    models.Guide.findAll({
        attributes: ['id', 'name', 'surname', 'code_guide', 'gender', 'DOB', 'image'],
        include: [{
            model: models.Languages,
        }],
        limit: 10
    }).then(response => {
        res.send(response)
    });


};
exports.getguideByid = function (req, res, next) {
    var id = req.params.id
    models.Guide.findById(id).then(response => {
        res.send(response);
    })

};
exports.booking = function (req, res, next) {
    console.log(req.body);
      models.User_Trip.create({
          user_id:1,
          trip_id:req.body.tripid,
          appointment:req.body.date,
          numberofAdult:req.body.adult,
          numberofchilde:req.body.child,
          totalprice:req.body.totalprice,
          commission:req.body.totalprice*0.07,
          price:req.body.totalprice+req.body.totalprice*0.07
      }).then(response=>{
          res.send(response);
      })

};
exports.getbooking = function (req,res,next) {
    models.Booking.findAll({
        where:{
          user_id:1,
        },
        include:[{
            model:models.Trip
        }]
    }).then(response=>{
        res.send(response);
    })

}