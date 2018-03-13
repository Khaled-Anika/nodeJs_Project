// Declaration
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');


var home = require('./controllers/home');
var interface = require('./controllers/interface');
var login = require('./controllers/login');
var registration = require('./controllers/registration');
var user_home = require('./controllers/user_home');
var admin_home = require('./controllers/admin_home');
var logout = require('./controllers/logout');


var port = 1337;

// Configure
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'My top secret key', saveUninitialized: true, resave: false}));

//Static
app.use(express.static(path.join(__dirname, 'asset')));

// Route

/*app.all('*', function(req, res, next){
	if(req.url == '/' || req.url == '/home')
	{
		next();
		return;
	}
	if(req.session.loggedUser == null)
	{
		res.redirect('/home');
	}
	else
	{
		next();
	}
});*/

app.get('/', function(req, res){
	res.redirect('/home');
});


app.use('/home', home);
app.use('/interface', interface);
app.use('/login', login);
app.use('/registration', registration);
app.use('/user_home', user_home);
app.use('/admin_home', admin_home);
app.use('/logout', logout);

// Server startup
app.listen(port, function(){
	console.log('Server started at port ' + port);
});