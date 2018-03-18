var express = require('express'); 
var app = express(); 


app.get('/', function(req, res) { 
	res.send("Hi there, welcome to my assignment"); 
});


app.get('/speak/:animal', function(req, res) { 
	var animal = req.params.animal;
	var message = "";
	if(animal === "pig") {
		message = "OINK! OINK";
	} else if (animal === "cow") {
		message = "MOOO! MOOO";
	} else if (animal === "dog") { 
		message = "WOOOF! WOOF";
	} else {
		message = "you didn't enter an animal that I have" ;
	}

	res.send(message); 
}); 


app.get('/repeat/:msg/:times', function(req, res) {
	var msg = req.params.msg; 
	var times = parseInt(req.params.times); 
	var repeatedMsg = ""; 
	for(var i = 0; i < times; i ++ ){ 
		repeatedMsg += msg;
		repeatedMsg += " "; 
	}
	res.send(repeatedMsg); 
});

app.get('*', function(req, res) { 
	res.send("Uh oh..what are doing with your life?"); 
});

app.listen(3000,function() {
	console.log("Server has started at localhost:3000")
})