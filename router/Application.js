const passportService = require('../service/Passport');
const Application = require('../controller/Application');
const ApplicationBroser = require('../controller/ApplicationBrowser')
const passport = require('passport');
const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin = passport.authenticate('local',{session:false});
module.exports = function(app){
/**** MOBILE **/
    app.get('/api/getactivities',Application.getactivities);
    app.get('/api/languages',Application.getlanguages);
    app.get('/api/plces',Application.getPlaces);
    app.get('/api/trip',Application.gettrip);
    app.get('/api/trip/:id',Application.getripbbyid);
    app.post('/testapitask',Application.postapplication);
    app.get('/api/guide',Application.getguide);
    app.get('/api/guide/:id',Application.getguideByid);


    /****BROWSER***/
    app.get('/api/browser/activities',ApplicationBroser.getactivities);
    app.get('/api/browser/languages',ApplicationBroser.getlanguages);
    app.get('/api/placebyactivities',ApplicationBroser.getPlacebyactivities);





}
