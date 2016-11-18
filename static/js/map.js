var username;

function setup()
{
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

}