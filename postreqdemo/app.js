var app = require('express')();
var bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Chris", "Miranda", "Justin", "Pierre", "Lily", "Lin"];
app.set("view engine", "ejs"); 
app.get("/", function(req, res) {
	res.render("home"); 
});
app.get("/friends", function(req, res) {
	
	res.render("friends", {friends: friends});
});
app.post("/addfriend", function(req, res) { 
	var newFriend = req.body.newFriend; 
	friends.push(newFriend);
	res.redirect("/friends"); 
});
app.listen(3000, function() { 
	console.log("app started at localhost:3000");
}); 