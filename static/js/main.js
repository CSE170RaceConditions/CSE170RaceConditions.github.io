var username;
var avatar;

function setup()
{
    username = sessionStorage.getItem("raceConditionsUsername");
    if (username == null)
    {
        window.location.href = "/";
    }

    // Logout
    $("#logout").click(function()
    {
        window.location.href = "/";
        sessionStorage.removeItem("raceConditionsUsername");
    });

    // Load the avatar that the user has selected
    $.get("avatars/" + username, function(data)
    {
        avatar = data.selected;
        console.log("Selected avatar: " + avatar);
        $(".avatar").attr("src", "assets/avatars/" + avatar + ".png");
    });
}

// sample code from w3, will edit later
function move() 
{
    var elem = document.getElementById("myBar");
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
    if (width >= 100) {
        clearInterval(id);
    } else {
        width++;
        elem.style.width = width + '%';
        document.getElementById("demo").innerHTML = width * 1  + '%';
        }
    }
}

