/*---- SERVER SIDE FILE ----*/

// routes
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
var index = require( './modules/routes/index' );
// var homes = require('./modules/routes/homes');

// uses
app.use( express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use( '/', index );
// app.use( '/homes', homes);


// globals
var port = process.env.PORT || 3001;

// spin up server
app.listen(port, function(){
  console.log('Server running on: ', port);
}); // end of app.listen
