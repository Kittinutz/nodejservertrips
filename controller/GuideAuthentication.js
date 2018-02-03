const models = require('../model/Providers');
const jwt = require('jwt-simple');
const config = require('../config');

const moment = require('moment');

 function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);

}
 function tokenDecode(user){
    return jwt.decode(user,config.secret);
}


exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    const name = req.body.name;
    const address = req.body.address;
    const codeguide = req.body.codeguide;
    const DOB = req.body.email;
    const tel = req.body.tel;

    if (!email || !password || !gender || !name || !address || !codeguide || !DOB || !tel) {
        console.log(req.body);
        return res.status(422).send({error: 'Data is not provide'});
    } else {
        models.Guide.findOne({
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
    })
        ;

    }

}
exports.signin = function (req, res, next) {
    //User has Already had their email and password auth'd
    //we just need to give them token
    res.send({token: tokenForUser(req.user)});
}
exports.GetMessage = function (req,res,next) {
    var user = tokenDecode(req.headers.authorization);
    models.Guide.findById(user.sub).then(response=>{
        res.json(response);
    })
}

