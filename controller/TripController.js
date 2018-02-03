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

exports.createtrip = function(req,res,next){

   //  var user = tokenDecode(req.headers.authorization);
   // models.Trip.create({
   //     name: req.body.trip.name,
   //     description: req.body.trip.description,
   //     creater_id: user.sub,
   //     location: req.body.trip.location,
   //     price: req.body.trip.price,
   //     schedules: req.body.schedules
   // },{
   //     include:[models.Schedule]
   // }).then(response=>{
   //     res.send(response);
   // });
    console.log(req.body);
    res.send(req.body);
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
