
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
var userInViews = require('./middleware/userInViews');
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// ..



//config express-session 
const sess = {
    secret: 'CHANGE THIS TO A RANDOM SECRET',
    cookie: {}, 
    resave: false, 
    saveUninitialized: true 
};

const strategy = new Auth0Strategy(
    {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL:
          process.env.AUTH0_CALLBACK_URL || 'http://localhost:4000/callback'
    },

    function (accessToken, refreshToken, extraParams, profile, done){
        //accessToken is the token to call Auth0 API (not needed in most cases)
        //extraParams.id_token has the JSON Web Token 
        //profile has all the information from the user
        return done(null, profile); 
    }
);


passport.use(strategy);

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });


const app = express();

if(app.get('env') === 'production'){
    sess.cookie.secure = true;/// serve secure cookies, requires https
}

app.use(session(sess))
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: 'shhhhhhhhh',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(userInViews());


app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);

app.listen(4000, (err) => {
    if (err) console.log(err.message);
    console.log("App running on port 4000 of localhost");
  });