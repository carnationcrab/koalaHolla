var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require( 'path' );
var port = process.env.PORT || 5000;

var indexRouter = require('../modules/indexRouter');
var koalaList = require('../modules/koalaList');
var poolRouter = require('../modules/pool');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//adding routers

app.use('/', indexRouter);
app.use('/koalaList', koalaList);

// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});
