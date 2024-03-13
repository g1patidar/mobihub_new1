
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


const dbConnect = require("./config/dbConnect");
const passport = require("./config/passwordconfig");
const cookieSession = require('cookie-session');
const authRouter = require('./routes/authRoute');
 const userdb = require("./models/user/loginwithgogl");
const { getUserData } = require("./controller/passport");
// const { isAuthenticated } = require("./middlewares/loginmiddlewere");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;


dbConnect();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}));

app.use(passport.initialize());
app.use(passport.session());

// Google OAuth routes
app.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: "https://mobihub-new1-o7u9.vercel.app/admin_layout/Admin_dashboard",
        failureRedirect: 'https://mobihub-new1-o7u9.vercel.app/login',

    })
);

app.use(express.json());

app.get('/getlogin', getUserData);
//     try {
//         console.log( "pankesh rrrrrrrrrrrrrrrrrrrrrrrrrr",req.user.googleId )
//         const userData = await userdb.findOne({ googleId:req.user.googleId });
//         console.log(userData, "pankesh")
//         res.send(userData);
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

app.post('/logout', (req, res) => {
    req.logout(); // Invalidate the user's session
    res.clearCookie('token'); // Clear the authentication token cookie
    res.sendStatus(200); // Send a success response
});


// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
