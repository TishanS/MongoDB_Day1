// create Database
use productDB

db.pdata.insert([{
	"id" : 1,
	"Pname" : "Tyre",
	"Pmaterial" : "rubber",
	"price" : 700,
	"Pcolor" : "Black"
},{
	"id" : 2,
	"Pname" : "Glass",
	"Pmaterial" : "limestone",
	"price" : 550,
	"Pcolor" : "white"
},{
	"id" : 3,
	"Pname" : "Bottle",
	"Pmaterial" : "copper",
	"price" : 450,
	"Pcolor" : "grey"
},{
	"id" : 4,
	"Pname" : "Aluminium",
	"Pmaterial" : "steel",
	"price" : 900,
	"Pcolor" : "silver"
},{
	"id" : 5,
	"Pname" : "Battery",
	"Pmaterial" : "lead",
	"price" : 2200,
	"Pcolor" : "red"
},{
	"id" : 6,
	"Pname" : "Plants",
	"Pmaterial" : "soft",
	"price" : 200,
	"Pcolor" : "green"
},{
	"id" : 7,
	"Pname" : "Clothes",
	"Pmaterial" : "cotton",
	"price" : 492,
	"Pcolor" : "indigo"
},{
	"id" : 8,
	"Pname" : "Chair",
	"Pmaterial" : "plastic",
	"price" : 450,
	"Pcolor" : "indigo"
},{
	"id" : 9,
	"Pname" : "Watch",
	"Pmaterial" : "stainless steel",
	"price" : 1500,
	"Pcolor" : "gold"
},{
	"id" : 10,
	"Pname" : "Edible oil",
	"Pmaterial" : "sunflower steel",
	"price" : 500,
	"Pcolor" : "orange"
}
]);
// db.pdata.drop();


// Find all the information about each products
db.pdata.find();
// Find the product price which are between 400 to 800
db.pdata.find({$and: [{price: {$gt:400}},{price: {$lt:800}}] });  
// Find the product price which are not between 400 to 600
db.pdata.find({$or: [{price: {$lt:400}} , {price: {$gt:600}}]});
// List the four product which are grater than 500 in price 
db.pdata.find({price: {$gt:500}}).limit(4);
// Find the product name and product material of each products
db.pdata.find({},{_id:0,Pname:1,Pmaterial:1});
// Find the product with a row id of 10
db.pdata.find({id:10});
// Find only the product name and product material
db.pdata.find({id:1},{_id:0,Pname:1,Pmaterial:1});
// Find all products which contain the value of soft in product material 
db.pdata.find({Pmaterial:"soft"});
// Find products which contain product color indigo  and product price 492.00
db.pdata.find({$and: [{"Pcolor":{$eq:"indigo"}}, {"price":{$eq:492}} ]});
// Delete the products which product price value are same
db.pdata.deleteMany({price: {$in:[450]}}); 







