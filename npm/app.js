var cat = require("cat-me");

var joke = require('knock-knock-jokes'); 

var faker = require('faker'); 



for (var i = 0; i < 10; i++) {
	var randomProduct = faker.commerce.productMaterial(); 
	console.log(randomProduct); 
}
console.log(randomProduct);

console.log(joke()); 

console.log(cat());
