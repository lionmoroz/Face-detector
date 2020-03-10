const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

database = {
	users:[{
		
		id: '123',
		name: 'John',
		email: 'john@gmail.com',
		password: 'fuck_you',
		entries: 0,
		joined: new	Date()
	}],	
}


app.get('/', (req, res)=>{
	res.send('Good job');
})
app.get('/singin', (res, req)=>{
	if(req.body.email === database.users[0].email &&
	   req.body.password === database.users[0].password) {
		res.send('success')
	}else{
		res.status(400).json('error log in')
	}
});

app.listen(3000, ()=>{
	console.log('App running')
});