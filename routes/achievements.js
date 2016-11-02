var data = require('../data/achievements.json');

exports.view = function(req, res){
	console.log("achievements.js");
	res.render('achievements');
};

exports.getAchievements = function(req, res)
{
	console.log("get achievements");
	console.log(req.params);
	console.log(data.people[req.params.username]);
	res.send(data.people[req.params.username]);
}