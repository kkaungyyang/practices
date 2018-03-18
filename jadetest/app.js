var app = require('express')(); 
var jade = require('jade'); 

app.get("/", function(req, res) {
	res.render("home.jade"); 
});