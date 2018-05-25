// load de biblioteker vi har brug for
var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

var fileUpload = require('express-fileupload');

var port = process.env.PORT || 1387 //En port der er åben. Kunne også være 3000 eller 1387 eller ...;

app.use(express.static('public/' + __dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public'))); // Public mappens adgang
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5 * 60 * 1000 } // 5 minutter
}));

// set the view engine to ejs
app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./routes/allroutes')(app);

app.listen(port);
console.log(port + ' er den port du skal bruge i din browser');