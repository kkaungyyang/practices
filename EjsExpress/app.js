var express = require("express"); 
var app = express(); 

app.get("/", function(req, res) {
	res.render("home.ejs"); 
});

app.get("/fall/:animal", function(req, res) { 
	var animal = req.params.animal; 
	res.render("love.ejs", {
		animal: animal
	}); 
});

app.listen(3000, function() {
	console.log('Server is running on localhost:3000'); 
});
