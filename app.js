
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();
var userSchema = mongoose.Schema({
    name: String,
    age: String
})
var Cat = mongoose.model('Cat', userSchema);
var tamy = new Cat({name: 'bob', age: '2'});
tamy.save(function (err) {
  if (err)
    console.log("Problem saving bob", err);
});

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users/new', user.new);

app.get('/cats/new', function(reg, res) {
    var bob = new User({name: 'cat 1', grade: 'A', class: '2013'});
}

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
