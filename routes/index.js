var accounts = require('../data/accounts.json');

exports.view = function(req, res){
	console.log("index.js");
	res.render('index');
};

exports.login = function(req, res)
{
	var result;
	if (accounts[req.params.username] == null)
		result = "noSuchUser";
	else if (accounts[req.params.username] != req.params.password)
		result = "wrongPassword";
	else
		result = "success";

	res.send({"result": result});
}