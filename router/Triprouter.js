
const TripController = require('../controller/TripController');

module.exports = function(app) {
    app.post('/trip',TripController.getripbyuser);

};