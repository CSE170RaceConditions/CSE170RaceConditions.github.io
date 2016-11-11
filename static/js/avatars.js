var username;

function setup()
{
	username = sessionStorage.getItem("raceConditionsUsername");
	if (username == null)
	{
		window.location.href = "/";
	}
}