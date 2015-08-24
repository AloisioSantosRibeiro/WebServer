var express      = require('express');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var app = express();

var port = process.env.PORT || 8080;

app.use( morgan('dev') );
app.use( cookieParser() );
app.use( session({secret: 'anyStringOfText', saveUninitialized: true, resave: true}) );


app.use('/', function(req, res) {
    res.send('Our First Express-program!');
    console.log('\n');
    console.log('================================================================================');
    console.log(req.cookies);
    console.log('================================================================================');
    console.log(req.session);
    console.log('\n');
});

app.listen(port);
console.log('Server running on port: ' + port);
