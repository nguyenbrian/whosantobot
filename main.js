var apiai = require('apiai');
 
var app = apiai("b1caf7449da64b749381acd5d40270f9");
 
var request = app.textRequest('hi');
 
request.on('response', function(response) {
    console.log(response);

});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();