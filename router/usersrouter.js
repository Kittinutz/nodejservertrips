const Authentication =  require('../controller/Authentication');

module.exports = function(app){

    app.post('/signup',Authentication.signup)
}