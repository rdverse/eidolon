const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
// fetch users from moongoose

const User = mongoose.model('users');


// Serialize user to set cookies
passport.serializeUser((mongoUser, done)=>{
    // pass the mongo id, not domain specific id
    done(null, mongoUser.id);
});

// will get the id sent by serializeUser
passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then((user)=>{done(null, user)});
});


passport.use(new googleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
        }, (accessToken, refreshToken, profile, done) => {
            console.log(accessToken, refreshToken,profile,done);
            // console.log("ssssss");
            console.log(profile.id);
            User.findOne({googleID : profile.id})
                .then((existingUser)=>{
                if(existingUser){
                console.log("User exists");
                done(null,existingUser);
                }
                else{
                    new User({googleID : profile.id})
                        .save()
                        .then((createdUser)=>{done(null,createdUser)});
                }
            })
        }
    )   
);

// /.then((newUser)=> console.log("User Created:\n" + newUser)