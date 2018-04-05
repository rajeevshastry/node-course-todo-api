/* var mongoose = require('mongoose');
mongoose.Promise =  global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp') */;

/* var Todo = mongoose.model('Todo',{
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
}); */
var User = mongoose.model('User',{
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
		}
});

var todo = new User({
		email: 'req.body.text'
	});
	//console.log(req.body.text);
	todo.save().then((doc)=>{
		//res.send(doc);
		console.log(doc);
		
	}, (e)=>{
		//res.status(400).send(e);
		
		console.log(e);
	});