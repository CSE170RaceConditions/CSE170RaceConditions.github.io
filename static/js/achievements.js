var username;

var achievements;

function setup()
{
	console.log("Setting up achievements.");

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

	$.get("achievements/" + username, function(data)
	{
		console.log(data);
		achievements = data;
		populateAchievementList();
	});
}

function populateAchievementList()
{
	for (id in achievements)
	{
		var obj = achievements[id];

		var percentage = parseFloat(obj.progress) / parseFloat(obj.max) * 100;
		console.log(percentage);

		console.log(obj.description);
		console.log(obj["description"]);

		$(".achievementlist").append(
			'<div class="achievement" id="' + obj.id + '">' +
			'<b class="title">' + obj.title + '</b></br>' +
			'<small class="description">' + obj.description + '</small>' +
			'<div class="progressbar">' +
			'<div class="w3-progress-container" style="width: 280px;">' +
		    '<div id="bar" class="w3-progressbar w3-green" style="width:' + percentage + '%">  ' 
		    + obj.progress + '/' + obj.max + '</div>' +
			'</div></div></div>');
	}
}