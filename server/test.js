const express = require('express');

var app = express();

app.get('/', function(req, res) {
 console.log('Welcome to Epic');
});


app.listen(3500,()=>{
	console.log(`Server is up and running at port `);
});

