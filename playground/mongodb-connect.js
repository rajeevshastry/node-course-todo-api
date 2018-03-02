//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
/*var user = {name:'Rajeev', age: 36};
var {name} = user;

console.log(name);*/
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
	if (err){
		return console.log('Unable to connect mongodb');
	}
	console.log('Connected to mongodb server');
	const db = client.db('TodoApp');
/*	db.collection('Todos').insertOne({
		text: 'Hello World!',
		completed: false
	},(err, result)=>{
		if(err){
			return console.log('Unable to insert', err);
		}
		
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	
db.collection('Users').insertOne({
	id:123,
	name: 'Epic',
	age: 11,
	location: 'Winter Springs, FL'
}, (err, result)=>{
	if(err){
		return console.log('Unable to insert users');
	}
	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
});*/
	client.close();
});

