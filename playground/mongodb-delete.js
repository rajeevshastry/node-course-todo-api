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
	
	//delete Many
	/*db.collection('Todos').deleteMany({text: 'Eat dinner'}).then ((result)=>{
		console.log(result);
	});*/
	//delete onerror
	/*db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then ((result)=>{
		console.log(result);
		
	});*/
	//findOneAndDelete
	/*db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
		console.log(result);
	})*/
	
	/*db.collection('Users').deleteOne({name: 'Epic'}).then((result)=>{
		console.log(result);
	})
	
	db.collection('Users').deleteMany({name: 'Epic Group'}).then((result)=>{
		console.log(result);
		
	})*/
	
	db.collection('Users').findOneAndDelete({_id: new ObjectID("5a9c385be358ad3f40ab82b4")}).then ((results, )=>{
		console.log(JSON.stringify(results,undefined,2 ));
	});
	
});

