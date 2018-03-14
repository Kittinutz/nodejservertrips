const Authentication =  require('../controller/Authentication');
const passportService = require('../service/Passport');
const Application = require('../controller/Application');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin = passport.authenticate('local',{session:false});
module.exports = function(app){


    app.get('/',Authentication.message);
    app.post('/signin',requireSignin,Authentication.signin);
    app.post('/signup',Authentication.signup);
    app.post('/bookingtrip',Application.booking);

}
