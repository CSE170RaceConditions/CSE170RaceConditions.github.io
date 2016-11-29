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

exports.incrementAchievement = function(req, res)
{
	var account = data.people[req.params.username];

	var completed = [];

	for (id in account)
	{
		if (id.match(req.params.achievementType + ".*"))
		{
			console.log("checking " + id);

			var obj = account[id];
			if (parseFloat(obj.progress) < parseFloat(obj.max))
			{
				obj.progress = parseFloat(obj.progress) + 1;

				if (obj.progress == obj.max)
					completed.push(id);
			}
		}
	}

	console.log("completed: " + completed);
}