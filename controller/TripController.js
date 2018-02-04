const models = require('../model/Providers');
const config = require('../config');
const jwt = require('jwt-simple');



function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);

}
function tokenDecode(user){
    return jwt.decode(user,config.secret);
}

exports.createtrip = function(req,res,next) {


     var user = tokenDecode(req.headers.authorization);
    models.Trip.create({
        name: req.body.name,
        description: req.body.description,
        creater_id: user.sub,
        location: req.body.location.value,
        price: req.body.price,
        schedules: req.body.schedule
    },{
        include:[models.Schedule]
    }).then(response=>{
        res.send(response);
    });
    console.log(req.body);
}
exports.show =function(req,res,next){
    var user = tokenDecode(req.headers.authorization);
    models.Trip.findAll(
        {where:
                {
                    creater_id:user.sub
                },

        include:[{
        model:models.Schedule,
        as:'schedules'
    }]
        }
        ).then(respone=>{
        res.send(respone);
    });
}
