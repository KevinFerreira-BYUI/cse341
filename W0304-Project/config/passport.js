const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const dotenv = require("dotenv");
dotenv.config();

const passportIni = passport.initialize();
const passportSes = passport.session();

const GitHubPass = passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
function(accessToken, refreshToken, profile, done){
    return done(null, profile);
}));

const passSerialize = passport.serializeUser((user, done) => {
    done(null, user);
});

const passDeserialize = passport.deserializeUser((user, done) => {
    done(null, user);
});


module.exports = {
    passportIni,
    passportSes,
    GitHubPass,
    passSerialize,
    passDeserialize
}