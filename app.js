
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var main = require("./routes/main");
var avatars = require("./routes/avatars");
var achievements = require("./routes/achievements");
var quests = require("./routes/quests");

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'static')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get("/main", main.view);
app.get("/main2", main.view2); // Second main page for A/B testing

app.get("/avatars", avatars.view);
app.get("/avatars/:username", avatars.getAvatars);
app.get("/avatars/:username/:avatar", avatars.setSelection);

app.get("/login/:username/:password", index.login);
app.get("/register/:username/:password", index.register);

app.get("/achievements", achievements.view);
app.get("/achievements/:username", achievements.getAchievements);

app.get("/quests", quests.view);
app.get("/quests/:username", quests.getQuests);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
