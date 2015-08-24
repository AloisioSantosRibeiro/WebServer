var express      = require('express');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mongoose     = require('mongoose');

var configDB     = require('./config/database.js');
mongoose.connect(configDB.url);

var app = express();

var port = process.env.PORT || 8080;

app.use( morgan('dev') );
app.use( cookieParser() );
app.use( session({secret: 'anyStringOfText', saveUninitialized: true, resave: true}) );


// REPLACED
//
// app.use('/', function(req, res) {
//     res.send('Our First Express-program!');
//     console.log('\n');
//     console.log('================================================================================');
//     console.log(req.cookies);
//     console.log('================================================================================');
//     console.log(req.session);
//     console.log('\n');
// });
//
// BY...
require('./app/routes.js')(app);

app.listen(port);
console.log('Server running on port: ' + port);
