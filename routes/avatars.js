var avatars = require('../data/avatars.json');

exports.view = function(req, res){
	console.log("avatars.js");
	res.render('avatars');
};

exports.getAvatars = function(req, res)
{
	if (avatars.people[req.params.username] == null)
		res.send(avatars.people["default"]);
	else
		res.send(avatars.people[req.params.username]);
}

exports.setSelection = function(req, res)
{
	avatars.people[req.params.username].selected = req.params.avatar;
}