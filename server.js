//Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
var session = require('express-session')
app.use(session({
    secret : 'kittens',
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge : 60000}
}))
const flash = require('express-flash')
app.use(flash())
app.set('view engine', 'ejs');
require('./server/config/routes')(app)


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
