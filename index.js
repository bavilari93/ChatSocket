const express = require('express'), 
	mustacheExpress= require('mustache-express'),
app = express(), 
port = process.env.PORT || 8080 


app.engine( 'html', mustacheExpress()); 
app.set('view engine', 'html');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.listen(port, ()=>{
	console.log(`sever is listening on 🌚 🌝  ${port}`)
});

app.get('/', ( req, res)=>{
	res.render('index')
}); 


