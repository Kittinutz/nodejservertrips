const user = require('../model/User');
const moment = require('moment');
const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');


function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);

}

exports.signup = function (req, res, next) {
    console.log(req.body);
    models.User.findOne({eamil:req.body.email}).then(response=>{
        if(response==null){
            models.User.create(req.body).then(response=>{
                return res.json({token: tokenForUser(response)});
            });
         }else{
                return res.json({token: tokenForUser(response)});
        }
    });


}
exports.signin = function (req,res,next) {
    //User has Already had their email and password auth'd
    //we just need to give them token
    res.send({token: tokenForUser(req.user)});
}

