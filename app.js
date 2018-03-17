// Declaration
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var expressValidator = require('express-validator');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
var dbconfig = require('./models/dbConfig');
var conn = mysql.createConnection(dbconfig.conn); 
//require('./controllers/search')(app);
var home = require('./controllers/home');
var login = require('./controllers/login');
var registration = require('./controllers/registration');
var user_home = require('./controllers/user_home');
var admin_home = require('./controllers/admin_home');
var add_medicine = require('./controllers/add_medicine');
var medicines = require('./models/medicines');
var medicine_list_buy = require('./models/medicine_list_buy');
var dashboard = require('./controllers/dashboard');
var news = require('./controllers/medical_news');
var black_meds = require('./controllers/black_meds');
var logout = require('./controllers/logout');
var top_user = require('./controllers/top_user');
var top_medicine = require('./controllers/top_medicine');
var settings = require('./models/settings');
var profile = require('./models/profile');
var tips = require('./models/tips');
//var retrieve_medicine = require('./controllers/retrieve_medicine');

var port = 1337;

var medicineModel = require.main.require('./models/medicine-model');

app.get('/', function(req, res){
	medicineModel.getAll(function(result){
		res.render('search', {medicineList: result});
		//res.json(result);
	});
});

app.get('/search',function(req,res){
	conn.query('SELECT * from medicine WHERE med_name LIKE "%'+req.query.key+'%"', function(err, rows, fields) {
	if (err) throw err;
    var data=[];
    console.log(rows);
    for(i=0;i<rows.length;i++)
      {
      	console.log(rows[i]);
        data.push(rows[i].med_name);
      }
      res.end(JSON.stringify(data));
	});
});

// Configure
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'My top secret key', saveUninitialized: true, resave: false}));
app.use(expressValidator());

//Static
app.use(express.static(path.join(__dirname, 'asset')));
app.use(express.static(path.join(__dirname, 'JS')));

// Route
app.get('/', function(req, res){
	res.redirect('/search');
});

app.use('/home', home);
app.use('/login', login);
app.use('/registration', registration);
app.use('/medical_news', news);
app.use('/black_meds', black_meds);

app.all('*', function(req, res, next){
	if(req.url == '/' || req.url == '/login')
	{
		next();
		return;
	}
	if(req.session.loggedUser == null)
	{
		res.redirect('/login');
	}
	else
	{
		next();
	}
});

app.use('/user_home', user_home);
app.use('/admin_home', admin_home);
app.use('/add_medicine', add_medicine);
//app.use('/medicines', medicines);
app.use('/dashboard', dashboard);
//app.use('/medicine_list_buy', list);
//app.use('/search', search);
//app.use('/top_user', top_user);
//app.use('/settings', settings);
app.use('/logout', logout);

app.use(
    connection(mysql,{
        
        host: 'localhost',
        user: 'root',
        password : '',
        database:'sheba'
    },'request')
);

//routes

//medicines crud
app.get('/medicines', medicines.list);
app.get('/medicines/add', medicines.add);
app.post('/medicines/add', medicines.save);
app.get('/medicines/delete/:id', medicines.delete_customer);
app.get('/medicines/edit/:id', medicines.edit); 
app.post('/medicines/edit/:id',medicines.save_edit);

//medicines buy
app.get('/medicine_list_buy', medicine_list_buy.list);
app.get('/medicine_list_buy/buy/:id', medicine_list_buy.buy); 
app.post('/medicine_list_buy/buy/:id',medicine_list_buy.buy_save);

app.get('/top_user', top_user.top_buy);
app.get('/top_medicine', top_medicine.top_buy);

app.get('/settings', settings.list);
app.get('/settings/edit_profile/:name', settings.edit_pro);
app.post('/settings/edit_profile/:name', settings.pro_save); 
app.get('/settings/edit_password/:name',settings.edit_pass);
app.post('/settings/edit_password/:name',settings.pass_save);

app.get('/profile', profile.list);

app.get('/tips/tip1', tips.list1);
app.get('/tips/tip2', tips.list2);

/*app.use(app.router);
routes.initialize(app);*/

// Server startup
app.listen(port, function(){
	console.log('Server started at port ' + port);
});

module.exports = app;