const models = require('../model/Providers');

// const Op = config.Sequelize.Op;
const config = require('../config');
const jwt = require('jwt-simple');



function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);

}
function tokenDecode(user){
    return jwt.decode(user,config.secret);
}

exports.CreateTask = function (req, res, next) {

    var user = tokenDecode(req.headers.authorization);
    models.Task.create({

        user_id: user.sub,
        appointment: req.body.date,
        numberofperson: req.body.numberofPerson
    }).then(user => {
        user.setActivities(req.body.activities);
        user.setLanguages(req.body.languages);
        res.send(user);
    });



}
exports.getTask = function (req, res, next) {

    models.Task.findAll({
        include: [{
            model: models.Languages,
            where: {id: 22}
        },
            {
                model: models.User
            }
        ]
    }).then(response => {
        res.send(response);
    })

}
