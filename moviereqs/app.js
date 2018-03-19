var express = require("express"); 
var bodyParser = require("body-parser"); 
var app = express(); 

var request = require("request"); 


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 


app.get("/", function(req, res) { 
	res.render("search"); 
}); 

app.get("/results", function(req, res) { 
	var key = req.query.key; 
	var url  = "http://omdbapi.com/?s=" + key; 
	url += "&apikey=thewdb";
	request(url, function(error, response, body){ 
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body); 
			var key = req.query.key; 
			console.log(key); 
			res.render("results", {data: data}); 
		}
	});
});

app.get("*", function(req,res) { 
	res.send("there was an error"); 
}); 
 

app.listen(3000, function() { 
	console.log("App started at localhost:3000");
});