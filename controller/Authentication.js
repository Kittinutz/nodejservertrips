const user = require('../model/User');
const service = require('../service/UserServices');
const moment = require('moment');
const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');


function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);

}

exports.signup = function (req, res, next) {

    if (!req.body.email || !req.body.password || !req.body.name) {
        return res.status(422).send({error: 'You must Provide email and password'});
    }


    models.Guides.findOne({
        where: {email: req.body.email}
    }).then(guide => {
        if(!guide)
    {
        models.Guide.create(req.body).then(guide => {

        return res.json({token: tokenForUser(guide)});
    }).
        catch(function (err) {
            return res.status(400).send({message: err.message}); //
        }).catch(function (err) {
            return res.status(500).json({message: "issues trying to connect to database"});
        });

    }
else
    {
        return res.status(422).send({error: 'You accout is Exist'});
    }
});


}
exports.signin = function (req,res,next) {
    //User has Already had their email and password auth'd
    //we just need to give them token
    res.send({token: tokenForUser(req.user)});
}

