const models = require('../model/Providers');
const config = require('../config');
const jwt = require('jwt-simple');
const Se = require('../config/sequelize');
const Op = Se.Sequelize.Op;

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);

}

function tokenDecode(user) {
    return jwt.decode(user, config.secret);
}

exports.createtrip = function (req, res, next) {

    var user = tokenDecode(req.headers.authorization);
    models.Trip.create({
        name: req.body.name,
        description: req.body.description,
        creater_id: user.sub,
        location: req.body.first.DestinationSelect.value,
        price: req.body.price,
        schedules: req.body.schedule
    }, {
        include: [models.Schedule]
    }).then(response => {
        response.setPlaces(req.body.first.placeselect);
        res.send(response);
    });

}
exports.show = function (req, res, next) {
    var user = tokenDecode(req.headers.authorization);
    models.Trip.findAll(
        {
            where:
                {
                    creater_id: user.sub
                },

            include: [{
                model: models.Schedule,
                as: 'schedules'
            }]
        }
    ).then(respone => {
        res.send(respone);
    });
}

exports.showById = function (req, res, next) {

    var id = req.params.id;
    models.Trip.findAll(
        {
            where:
                {
                    id: id
                },
            include: [{
                model: models.Places,
                through: {
                    attributes: []
                },
                include: [{
                    model: models.Activities,
                    where: {id: Se.Sequelize.col('places.id')},
                    as: 'activities',
                    through: {
                        attributes: []
                    }
                }]
            }, {
                model: models.Schedule
            }]
        }
    ).then(response => {
        res.send(response)
    })
}
exports.getripbyuser = function (req, res, next) {
    let places = req.body.places;
    console.log(places);
    models.Trip.findAll({
        include: [
            {
                model: models.Places,
                where: {
                    [Op.or]: {id: req.body.places}
                },
                attributes: [],
            }
        ]
    }).then(response => {
        res.send(response);
    })
}
exports.getBooking = async function (req,res) {
  var user = tokenDecode(req.headers.authorization);
  response =  await  models.User_Trip.findAll({
    include:[
      {
        model:models.User,
        attributes:['name','email','avatar']
      },
      {
          model:models.Trip,
          where:{creater_id:user.sub}
      }
    ]
  })
  res.send(response);
}
