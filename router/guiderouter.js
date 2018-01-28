const GuideAuthentication = require('../controller/GuideAuthentication');
const jwt = require('jwt-simple');

const passportService = require('../service/Passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin = passport.authenticate('local',{session:false});
module.exports = function (app) {
    app.post('/guide/signup',GuideAuthentication.signup);
    app.get('/guide',requireAuth,GuideAuthentication.GetMessage);
    app.post('/guide/signin',requireSignin,GuideAuthentication.signin);
}