var data = require('../data/quests.json');

exports.view = function(req, res){
	console.log("quests.js");
	res.render('quests');
};

exports.getQuests = function(req, res)
{
	if (data.people[req.params.username] == null)
		res.send(data.people["default"]);
	else
		res.send(data.people[req.params.username]);
}