var express = require('express');
var app = express();
var middleware = require('./middleware.js');


//app.use(middleware.requireauthentication);
app.use(middleware.logger);
var PORT = process.env.port || 3000;

app.get('/about', middleware.requireauthentication, function(req, res){
	res.send('About page ');
});

app.use(express.static(__dirname+'/public'));
//console.log(__dirname); 
//about
// About us
app.listen(PORT,function(){
	console.log('Server Started on port! '+PORT);
}); 