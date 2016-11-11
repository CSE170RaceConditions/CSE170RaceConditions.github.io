var username = "demo";

var achievements;

function setup()
{
	console.log("Setting up achievements.");

	$.get("achievements/" + username, function(data)
	{
		console.log(data);
		achievements = data;
		populateAchievementList();
	});
}

function populateAchievementList()
{
	for (i in achievements)
		{
			var obj = achievements[i];

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
			    '<div id="bar" class="w3-progressbar w3-green" style="width:' + percentage + '%">' 
			    + obj.progress + '/' + obj.max + '</div>' +
				'</div></div></div>');
		}
}