function login()
{
	var username = document.getElementById("login_username").value;
	var password = document.getElementById("login_password").value;

	$.get("login/" + username + "/" + password, function(data)
	{
		if (data.result == "success")
		{
			document.getElementById("loginoutput").innerHTML = "Login successful! Redirecting...";
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
	var username = document.getElementById("reg_username").value;
	var password = document.getElementById("reg_password").value;
	var confirm = document.getElementById("reg_confirmpassword").value;

	if (password != confirm)
		document.getElementById("registeroutput").innerHTML = "Passwords do not match!";
	else
	{
		$.get("register/" + username + "/" + password, function(data)
		{
			if (data.result == "success")
			{
				document.getElementById("registeroutput").innerHTML = "Registration successful! Use the login form above to log in.";
			}
			else if (data.result == "nameTaken")
			{
				document.getElementById("registeroutput").innerHTML = "This name is already taken!";
			}
			else
			{
				document.getElementById("registeroutput").innerHTML = "Something went wrong; please try again.";
			}
		});
	}
}