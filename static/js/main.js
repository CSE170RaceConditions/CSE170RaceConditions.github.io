var username;
var avatar;

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

    // Tutorial
    $(".tutorial").click(function()
    {
        // Google Analytics event recorder for every time the tutorial button
        // is clicked.
        ga('send','event','tutorial','click');
        alert(`Welcome to Race Conditions! Here you can race against the avatar below and see who can reach their destination first!
1) Figure out where you want to go!
2) Go to the map and click "View Larger Map"
3) Put in your start and end location. Remember how long it takes!
4) Go back to the home menu and put that time into the timer. 
5) Press the play button and begin your race!`);
    });

    // Load the avatar that the user has selected
    $.get("avatars/" + username, function(data)
    {
        avatar = data.selected;
        console.log("Selected avatar: " + avatar);
        $(".avatar").attr("src", "assets/avatars/" + avatar + ".png");
    });

    setupAlarm();
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


function setupAlarm()
{
    alarmPlaying = localStorage.getItem("alarmPlaying");
    if (alarmPlaying == null)
        alarmPlaying = 0;

    initHours = localStorage.getItem("initHours");
    initMins = localStorage.getItem("initMins");
    initSecs = localStorage.getItem("initSecs");
    if (initHours == null)
        initHours = 0;
    if (initMins == null)
        initMins = 5;
    if (initSecs == null)
        initSecs = 0;

    alarmHours = localStorage.getItem("alarmHours");
    alarmMins = localStorage.getItem("alarmMins");
    alarmSecs = localStorage.getItem("alarmSecs");
    if (alarmHours == null)
        alarmHours = 0;
    if (alarmMins == null)
        alarmMins = 5;
    if (alarmSecs == null)
        alarmSecs = 0;

    if (alarmPlaying != 0)
    {
        $(".upbutton").hide();
        $(".downbutton").hide();
    }

    updateDisplay();

    $("#play").click(function()
    {
        $(".upbutton").hide();
        $(".downbutton").hide();
        alarmPlaying = 1;
        updateDisplay();
    });

    $("#pause").click(function()
    {
        alarmPlaying = 0;
        updateDisplay();
    })

    $("#reset").click(function()
    {
        $(".upbutton").show();
        $(".downbutton").show();
        alarmPlaying = 0;
        reset();
        updateDisplay();
    })

    $("#hourup").click(function()
    {
        initHours++;
        if (initHours > 24)
            initHours = 0;
        alarmHours = initHours;
        updateDisplay();
    });

    $("#hourdown").click(function()
    {
        initHours--;
        if (initHours < 0)
            initHours = 24;
        alarmHours = initHours;
        updateDisplay();
    });

    $("#minup").click(function()
    {
        initMins++;
        if (initMins > 59)
            initMins = 0;
        alarmMins = initMins;
        updateDisplay();
    });

    $("#mindown").click(function()
    {
        initMins--;
        if (initMins < 0)
            initMins = 59;
        alarmMins = initMins;
        updateDisplay();
    });

    $("#secup").click(function()
    {
        initSecs++;
        if (initSecs > 59)
            initSecs = 0;
        alarmSecs = initSecs;
        updateDisplay();
    });

    $("#secdown").click(function()
    {
        initSecs--;
        if (initSecs < 0)
            initSecs = 59;
        alarmSecs = initSecs;
        updateDisplay();
    });

    setInterval(timer, 1000);
}

function timer()
{
    if (alarmPlaying == 0)
        return;

    alarmSecs--;
    if (alarmSecs < 0)
    {
        alarmSecs = 59;
        alarmMins--;
        if (alarmMins < 0)
        {
            alarmMins = 59;
            alarmHours--;
            if (alarmHours < 0)
            {
                // Time is up!
                $(".upbutton").show();
                $(".downbutton").show();
                reset();
                alarmPlaying = 0;
            }
        }
    }
    updateDisplay();

    // Learn about alert fucntion in http://www.w3schools.com/js/js_timing.asp
    
    if(alarmPlaying == 1 && alarmMins == 2 && alarmSecs ==0)
    {
        alert('Quick! You only have 2 minutes left');
    }
    if(alarmPlaying == 1 && alarmMins == 10 && alarmSecs ==0)
    {
        alert('You have ten minutes left');
    }
    if(alarmPlaying == 1 && alarmMins == 5 && alarmSecs ==0)
    {
        alert('You have five minutes left');
    }
}

function updateDisplay()
{
    document.getElementById("hourdisplay").innerHTML = padZeroes(alarmHours);
    document.getElementById("mindisplay").innerHTML = padZeroes(alarmMins);
    document.getElementById("secdisplay").innerHTML = padZeroes(alarmSecs);

    localStorage.setItem("alarmHours", alarmHours);
    localStorage.setItem("alarmMins", alarmMins);
    localStorage.setItem("alarmSecs", alarmSecs);

    localStorage.setItem("initHours", initHours);
    localStorage.setItem("initMins", initMins);
    localStorage.setItem("initSecs", initSecs);

    localStorage.setItem("alarmPlaying", alarmPlaying);

    console.log("initSecs: " + initSecs + " alarmSecs: " + alarmSecs);
}

function reset()
{
    alarmHours = initHours;
    alarmMins = initMins;
    alarmSecs = initSecs;
}

function padZeroes(value)
{
    if (value >= 10)
        return value;
    return "0" + value;
}