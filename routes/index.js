// require("dotenv").config();
// const express = require("express");
// const passport = require("passport");
// const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn();
// const request = require("request");

// const env = {
//   AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
//   AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
//   AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL
// };

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("You are getting data");
// });

// router.get(
//   "/login",
//   passport.authenticate("auth0", {
//     clientID: env.AUTH0_CLIENT_ID,
//     domain: env.AUTH0_DOMAIN,
//     redirectUri: env.AUTH0_CALLBACK_URL,
//     responseType: "code",
//     scope: "openid profile email"
//   }),
//   (req, res) => {
//     res.redirect("/");
//   }
// );

// router.get("/logout", (req, res) => {
//   res.send("You are on the logout page");
// });
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Auth0 Webapp sample Nodejs' });
});

module.exports = router;

