function login()
{
	var username = document.getElementById("login_username").value;
	var password = document.getElementById("login_password").value;

	$.get("login/" + username + "/" + password, function(data)
	{
		if (data.result == "success")
		{
			sessionStorage.setItem("raceConditionsUsername", username);
			console.log("Setting user: " + username)
			window.location.href = "main";
		}
		else if (data.result == "noSuchUser")
		{
			document.getElementById("loginoutput").innerHTML = "Invalid user!";
		}
		else if (data.result == "wrongPassword")
		{
			document.getElementById("loginoutput").innerHTML = "Wrong password!";
		}
		else
		{
			document.getElementById("loginoutput").innerHTML = "Something went wrong; please try again.";
		}
	});
}

function register()
{
}