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

/*
 * Take in an achievement type and increment all achievements
 * of that type, sending back the completed list for easy
 * display.
 */
exports.incrementAchievement = function(req, res)
{
	var account = data.people[req.params.username];
	var completed = "";

	var types = JSON.parse(req.params.achievementType);

	for (i in types.achievementType)
	{
		var type = types.achievementType[i];
		for (id in account)
		{
			if (id.match(type))
			{
				var obj = account[id];
				if (parseFloat(obj.progress) < parseFloat(obj.max))
				{
					obj.progress = parseFloat(obj.progress) + 1;

					if (obj.progress == obj.max)
						completed += "\n  - " + obj.title;
				}
			}
		}
	}

	res.send({"completed": completed});
}