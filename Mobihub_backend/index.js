
const express = require("express");
const app = express();
const cors = require("cors");

const allowedOrigins = [
    "https://mobihub-new1-o7u9.vercel.app",
    "http://localhost:3000" // Example of a local development server

];
app.use(cors({
    origin: allowedOrigins,
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));
const passport = require("./config/passwordconfig");
const dbConnect = require("./config/dbConnect");
const session = require('express-session');
const authRouter = require('./routes/authRoute');
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
dbConnect();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);
app.use(express.json());

app.use(session({
    secret:"jkfasi9hewnbbdvenoiew",
    resave:false,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/google', passport.authenticate('google', {scope: ['email', 'profile'] }));

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: "http://localhost:3000/admin_layout/Admin_dashboard",
        failureRedirect: 'http://localhost:3000/login',

    })
);

app.get("/login/success", async (req, res)=>{
    //  console.log("rewerwerfdsf", req.user);
     if(req.user){
        res.status(200).json({message:"user login", user:req.user}); 
     }else{
        res.status(400).json({message:"Not auutorized"}); 
    }
});

app.post('/logout', (req, res) => {
    req.logout(); // Invalidate the user's session
    res.clearCookie('token'); // Clear the authentication token cookie
    res.sendStatus(200); // Send a success response
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
