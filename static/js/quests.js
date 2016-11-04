var username = "demo";
var userlocked = "locked";

var quests;
var lockedquests;

function setup()
{
	console.log("Setting up quests.");

	$.get("quests/" + username, function(data)
	{
		console.log(data);
		quests = data;
		populateQuestList();
	});

	$.get("quests/" + userlocked, function(data)
	{
		console.log(data);
		lockedquests = data;
		populateLockedQuestList();
	});
}

function populateQuestList()
{
	for (i in quests)
		{
			var obj = quests[i];

			var percentage = parseFloat(obj.progress) / parseFloat(obj.max) * 100;
			console.log(percentage);

			$(".questlist").append(
				'<div class="quest" id="' + obj.id + '">' +
				'<b class="title">' + obj.title + '</b></br>' +
				'<small class="description">' + obj.description + '</small>' +
				'<div class="progressbar">' +
				'<div class="w3-progress-container" style="width: 280px;">' +
			    '<div id="bar" class="w3-progressbar w3-green" style="width:' + percentage + '%">' 
			    + obj.progress + '/' + obj.max + '</div>' +
				'</div></div></div>');
		}
}

function populateLockedQuestList()
{
	for (i in lockedquests)
		{
			var obj = lockedquests[i];

			var percentage = parseFloat(obj.progress) / parseFloat(obj.max) * 100;
			console.log(percentage);

			$(".questlist").append(
				'<div class="quest" id="' + obj.id + '">' +
				'<b class="title">' + obj.title + '</b></br>' +
				'<small class="description">' + obj.description + '</small>' +
				'<div class="progressbar">' +
				'<div class="w3-progress-container-locked" style="width: 280px;">' +
			    '<div id="bar" class="w3-progressbar w3-green" style="width:' + percentage + '%">' 
			     + '</div>' +
				'</div></div></div>');
		}
}
