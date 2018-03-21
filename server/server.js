const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
var {mongoose} = require('./db/mongoose.js');
//var {Todo} = require('./models/todo.js')
var {User} = require('./models/user');
const port = process.env.PORT || 3000;


var Todo = mongoose.model('Todo',{
	text: {
		type: String,
		required: true,
		minlength:1,
		trim: true
	},
	completed:{
		type: Boolean,
		default:false
	},
	completedAt:{
		type: Number,
		default: null
		
	}
});
var app = express();
app.use(bodyParser.json({ type: 'application/*+json' }));

app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text: req.body.text
	});
	
	todo.save().then((doc)=>{
		res.status(200).send(doc);
		
	}, (e)=>{
		res.status(400).send(e);
		
		//console.log(e);
	});
	
});

//Get Method

//GET /todos

app.listen(port, ()=>{
	console.log(`Started on port ${port}` );
});

