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
	/*
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5a8f028e0ba93fc16cb7b694')
	},{
		$set: {
			completed: true
		}
		
	}, {returnOriginal: false
	}).then((result)=>{
		console.log(result);
	})*/
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5aa839e3da29aa194f577714')
	},{
		$set:{
			name: 'Rajeev shastry'
		},
		$inc:{
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	})
});

