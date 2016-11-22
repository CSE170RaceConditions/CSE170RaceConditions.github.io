var data = require('../data/accounts.json');

exports.view = function(req, res){
	data["tutorial"] = false;
	console.log("main.js");
	res.render('main', data);
};
exports.view2 = function(req, res){
	data["tutorial"] = true;
	console.log("main.js");
	res.render('main', data);
};