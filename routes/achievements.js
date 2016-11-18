var data = require('../data/achievements.json');

exports.view = function(req, res){
	console.log("achievements.js");
	res.render('achievements');
};

exports.getAchievements = function(req, res)
{
	if (data.people[req.params.username] == null)
		res.send(data.people["default"]);
	else
		res.send(data.people[req.params.username]);
}