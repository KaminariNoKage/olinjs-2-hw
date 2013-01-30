// models for cats
var CatMod = require('../models/cat_model')

// listing all the cats
exports.list = function(req, res){
  // get the list of cats
  var cats = CatMod.find({}).sort('age').exec(function (err, docs) {
    if (err)
      return console.log("error", cats);
    // send it back
    res.render('catjade', {catlist: docs, title: 'Cat App'});
  });
};

// creating a new cat
exports.create = function(req, res){
  // create the cat
	var randone = Math.floor(Math.random()*10);
	var randtwo = Math.floor(Math.random()*20+1);
	var randthree = Math.floor(Math.random()*10);
	var namelist = ['Fluffy', 'Monster', 'Tammy', 'Maru', 'Gustave', 'Mr. Skittles', 'Tim', 'Couch Potato', 'Paper Weight', 'Einstein', 'The Doctor'];
	var colorlist = ['black', 'white', 'rainbow', 'asian', 'red', 'albino', 'explosion', 'grey', 'green', 'calico', 'brown'];

  var newkat = new CatMod({ name: namelist[randone], age: randtwo, color: colorlist[randthree]});
  newkat.save(function (err) {
    if (err)
      return console.log("error we couldn't save the new cat");
    // redirect to the list of cats
    res.redirect('/cats');
  });
};


exports.del = function(req, res){
	//Deletes the oldest cat
	CatMod.find().sort('-age').exec(function(err, docs) {
	docs[0].remove();
	res.redirect('/cats');
	});
};

exports.findcolor = function(req, res){
  CatMod.find({'color':req.params.color}).sort('age').exec(function (err, docs) {
    if (err)
      return console.log("error", cats);
    // send it back
    res.render('catjade', {catlist: docs, title: 'Cat App'});
  });
};
