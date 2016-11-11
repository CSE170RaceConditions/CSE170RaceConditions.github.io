var avatars = require('../data/avatars.json');

exports.view = function(req, res){
	console.log("avatars.js");
	res.render('avatars');
};

exports.getAvatars = function(req, res)
{
	res.send(avatars.people[req.params.username]);
}

exports.setSelection = function(req, res)
{
	avatars.people[req.params.username].selected = req.params.avatar;
}