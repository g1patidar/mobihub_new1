const passport = require('passport'); 

const GoogleStrategy = require('passport-google-oauth2').Strategy; 

passport.serializeUser((user , done) => { 
	done(null , user); 
});

passport.deserializeUser(function(user, done) { 
	done(null, user); 
}); 

passport.use(new GoogleStrategy({ 
	clientID:"227090914571-jgcipra0lgrur59h9ivoq1b0vebflbed.apps.googleusercontent.com", // Your Credentials here. 
	clientSecret:"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", // Your Credentials here.
	callbackURL:"http://localhost:5000/auth/google/callback",
	scope : ['email', 'profile']
}, 
function(request, accessToken, refreshToken, profile, done) { 
	return done(null, profile); 
} 
));
