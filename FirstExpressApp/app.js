var express = require("express"); 
var app = express(); 

// go to / and gets a "hi there" 
app.get("/", function(req, res) { 
	res.send("hi there!"); 
}); 


app.listen(3000,  function() { 
	console.log("Server has started at localhost:3000")
})

// app.listen(process.env.PORT, process.env.IP); 