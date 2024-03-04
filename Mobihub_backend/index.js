const express = require ("express");
const dbConnect = require("./config/dbConnect");
const passport = require("passport");
const cookieSession = require("cookie-session");
const app = express();
const cors = require("cors");
app.use(cors());
const authRouter = require ('./routes/authRoute');
const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const dotenv = require ('dotenv').config();
const PORT = process.env.PORT || 4000;
dbConnect();
require("./controller/passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/user', authRouter);

// app.use(notFound);
// app.use(errorHandler);

//Login With Google

app.use(cookieSession({ 
	name: 'google-auth-session', 
	keys: ['key1', 'key2'] 
})); 
app.use(passport.initialize()); 
app.use(passport.session()); 
	

app.get('/', (req, res) => { 
	res.send("<button><a href='/auth'>Login With Google</a></button>") 
}); 

// Auth 
app.get('/auth', passport.authenticate('google', { scope : ['email', 'profile'] }));


// Auth Callback 
app.get( '/auth/google/callback', 
	passport.authenticate( 'google', { 
		successRedirect: '/auth/callback/success', 
		failureRedirect: '/auth/callback/failure'
})); 

// Success 
app.get('/auth/callback/success' , (req , res) => { 
	if(!req.user) 
		res.redirect('/auth/callback/failure'); 
	res.send("Welcome " + req.user.email); 
}); 

// failure 
app.get('/auth/callback/failure' , (req , res) => { 
	res.send("Error"); 
}) 

app.listen(PORT, ()=>{
    console.log(`Server is runneble in this PORT : ${PORT}`);
});