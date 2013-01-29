var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // Somehow worked
});

var catSchema = mongoose.Schema({
	name: String,
	age: Number,
	color: String
});

var CatMod = mongoose.model('Cat', catSchema);

module.exports = CatMod;
