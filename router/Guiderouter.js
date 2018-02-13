const GuideAuthentication = require('../controller/GuideAuthentication');
const TripController = require('../controller/TripController');
const TaskController = require('../controller/TaskController');
const jwt = require('jwt-simple');
const passportService = require('../service/Passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin = passport.authenticate('local',{session:false});
module.exports = function (app) {
    app.post('/guide/signup',GuideAuthentication.signup);
    app.get('/guide',requireAuth,GuideAuthentication.GetMessage);
    app.post('/guide/signin',requireSignin,GuideAuthentication.signin);
    app.post('/guide/createtrip',requireAuth,TripController.createtrip);
    app.post('/guide/showtrip',requireAuth,TripController.show);
    app.get('/guide/showtrip/:id',requireAuth,TripController.showById);
    app.get('/guide/notification/task',requireAuth,TaskController.Notification);
    app.get('/guide/languages',requireAuth,GuideAuthentication.getOwnLanguages);
}
