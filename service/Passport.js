const passport = require('passport');
const models = require('../model/Providers');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//create local strategy
const localOptions = { usernameField:'email'};

const locallogin = new LocalStrategy(localOptions,function (email,password,done) {
    //verify this username
    //if it correct
    console.log(email);
    //otherwise,call done with false
    models.Guide.findOne({where:{email:email}}).then(guide=>{
        if(!guide){return don(null,false);}
        //compare password - is 'password'
    models.Guide.comparePassword(email,password,function (err,isMatch) {
        if(err){return done(err)}
        if(!isMatch){return done(null,false);}
        return done(null,guide);

    });
    });

});


const jwtOptions = {
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:config.secret
};



/* JWT Strategy */
const jwtLogin = new JwtStrategy(jwtOptions,function (payload,done) {
    // see if the User ID is exist
    // if it done
    //otherwise
    models.Guide.findById(payload.sub).then(guide=>{

        if(!guide){

            done(null,false);
    }else{
            done(null,guide);
    }
    });
});



/* Passport Strategy */
passport.use(jwtLogin);
passport.use(locallogin);

