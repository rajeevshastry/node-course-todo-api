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
	db.collection('Todos').find({
		_id: new ObjectID('5a8f028e0ba93fc16cb7b694')
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined, 2));
	}, (err)=>{
		console.log('Unable to fetch todos', err);
	})
*/
/*
db.collection('Todos').find().count().then((count)=>{
		console.log(`Todos count : ${count}`);
		
	}, (err)=>{
		console.log('Unable to fetch todos', err);
	})
*/

db.collection('Users').find({
	name: 'Epic Group'
}).toArray().then((docs)=>{
	//console.log('Users');
	console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
	console.log('Unable to find name', err)
})
	//client.close();
});

