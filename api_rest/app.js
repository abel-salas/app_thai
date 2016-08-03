var express     = require('express');
var bodyParser  = require('body-parser');
var nconf       = require('nconf');
var request     = require('request');
var mongoose = require('mongoose');

var expressSession = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it


var app = express();

app.use(cookieParser());

app.use(expressSession({secret:'somesecrettokenhere'}));

/*
 * Conecction database thai
 */

  mongoose.connect('mongodb://172.17.0.2:27017/thai');
  var db = mongoose.connection;
  db.on('error', function()  { console.log('ERROR Connected database APP! '); });
  db.once('open', function() { console.log('Connected with database!  '); });


var APP_ENV = process.env.ENVIRONMENT;
if(APP_ENV == undefined){ APP_ENV = "pre" }

nconf.file('config',  'config/' + APP_ENV + '/config.json');

console.log('ENVIRONMENT: ' + nconf.get('APP_ENV') );

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json(), function (req, res, next) {
    //Enable CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    console.log({originalUrl: req.originalUrl, ip: req.ip, method: req.method, body: req.body}, "Incoming request..."); //Log request...
    next();
});

app.listen(nconf.get('APP_PORT'));


require('./src/routes/routes-user'   )(app,request);
require('./src/routes/routes-service')(app,request);
require('./src/routes/routes-product')(app,request);
require('./src/routes/routes-auth'   )(app,request);
require('./src/routes/routes-cart'   )(app,request);
require('./src/routes/routes-order'  )(app,request);
