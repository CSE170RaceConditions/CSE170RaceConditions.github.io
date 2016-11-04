var data = require('../data/quests.json');

exports.view = function(req, res){
	console.log("quests.js");
	res.render('quests');
};

exports.getQuests = function(req, res)
{
	console.log("get quests");
	console.log(req.params);
	console.log(data.people[req.params.username]);
	res.send(data.people[req.params.username]);
}