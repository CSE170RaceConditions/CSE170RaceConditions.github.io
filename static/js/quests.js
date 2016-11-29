var username;

var quests;

function setup()
{
	console.log("Setting up quests.");

	username = sessionStorage.getItem("raceConditionsUsername");
	if (username == null)
	{
		window.location.href = "/";
		return;
	}

	// Logout
    $("#logout").click(function()
    {
        window.location.href = "/";
        sessionStorage.removeItem("raceConditionsUsername");
        console.log("Logging out...");
    });

	$.get("quests/" + username, function(data)
	{
		console.log(data);
		quests = data;
		populateQuestList();
	});
}

function populateQuestList()
{
	for (id in quests)
	{
		var obj = quests[id];

		var percentage = parseFloat(obj.progress) / parseFloat(obj.max) * 100;
		console.log(percentage);

		$(".questlist").append(
			'<div class="quest" id="' + obj.id + '">' +
			'<b class="title">' + obj.title + '</b></br>' +
			'<small class="description">' + obj.description + '</small>' +
			'<div class="progressbar">' +
			'<div class="w3-progress-container" style="width: 280px;">' +
		    '<div id="bar" class="w3-progressbar w3-green" style="width:' + percentage + '%">  ' 
		    + obj.progress + '/' + obj.max + '</div>' +
			'</div></div></div>');
	}
}