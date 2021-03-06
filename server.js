//SPDX-License-Identifier: Apache-2.0

// nodejs server setup

// call the packages we need
var express       = require('express');        // call express
var app           = express();                 // define our app using express
var bodyParser    = require('body-parser');
var http          = require('http')
var fs            = require('fs');
var path          = require('path');
var util          = require('util');
var os            = require('os');
var session       = require('express-session');
var FileStore     = require('session-file-store')(session);

// instantiate the app
var app = express();

// initialize session
app.use(session({
 secret: 'ESC_HOMEPAGE',
 resave: true,
 saveUninitialized: true,
 store: new FileStore({path:'D:/session'})
}));

// Load all of our middleware
// configure app to use bodyParser()
// this will let us get the data from a POST
//interprete the main body contents
// app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); //

// this line requires and runs the code from our routes.js file and passes it app
require('./routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './HTML_CSS_JS')));

// Save our port
var port = process.env.PORT || 8000;

// Start the server and listen on port
app.listen(port,function(){
  console.log("Live on port: " + port);
});
