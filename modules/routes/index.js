/*---- MAIN ROUTER ----*/

var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
  console.log('Hit in base url.');
  res.sendFile(path.resolve('views/index.html'));
}); // end base url

module.exports = router;
