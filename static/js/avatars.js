var username;

var avatars;

function setup()
{
	// Login check
	username = sessionStorage.getItem("raceConditionsUsername");
	if (username == null)
	{
		window.location.href = "/";
	}

	// Load the avatars that the user has unlocked
	$.get("avatars/" + username, function(data)
	{
		avatars = data;
		// Current selection
		document.getElementById("selected").innerHTML = capitalizeFirst(data.selected);
		$("#" + data.selected).css("border", "#303030 2px solid");

		for (key in data.unlocked)
		{
			if (data.unlocked[key] == "true")
			{
				$("#" + key).children('img').attr('src', "assets/avatars/" + key + ".png");
			}
		}
	});

	// Selection listener
	$(".avatar").click(function()
	{
		var name = this.id;

		if (avatars.unlocked[name] == "true")
		{
			// Tell the server
			$.get("avatars/" + username + "/" + name);
			avatars.selected = name;

			document.getElementById("selected").innerHTML = capitalizeFirst(name);
			$(".avatar").css("border", "rgba(0, 0, 0, 0) 2px solid");
			$("#" + name).css("border", "#303030 2px solid");
		}
	});
}

function capitalizeFirst(input)
{
	return input;
}