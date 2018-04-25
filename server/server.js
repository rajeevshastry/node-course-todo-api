const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
var {
	Todo
} = require('./models/todo.js');
var {
	mongoose
} = require('./db/mongoose.js');

var {
	User
} = require('./models/user');
const port = process.env.PORT || 3001;

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
			text: req.body.text
		});
	//console.log(req.body.text);
	todo.save().then((doc) => {
		res.send(doc);
		//console.log(doc);

	}, (e) => {
		res.status(400).send(e);

		//console.log(e);
	});

});

//Get Method
app.get('/todos', (req, res)=>{
	Todo.find().then((todos)=>{
		res.send({todos,
		test: 'Sucess!!'});
	}, (e)=>{
		res.status(400).send(e);
	})
});
//GET /todos

app.listen(port, () => {
	console.log(`Started on ${port} : `);
});

module.exports = {app};