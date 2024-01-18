var isOneStyleDisplayed = true;

const settingDate = localStorage.getItem("dateValue");
var dateParsed;
if(settingDate){
    dateParsed = JSON.parse(settingDate);

    dateParsed = new Date(dateParsed)
}

var day = "00";
var hour = "00";
var dayAndHour = "00";
var minute = "00";
var second = "00";
var date = dateParsed ? dateParsed : new Date('December 25 , 2024');
// var date = new Date('December 25 , 2024');

function formatValue(value) {
    if (value < 10) {
        return `0${value}`;
    }
    return value.toString();
};

function calcul() {
    const today = new Date();
    const difference = date.getTime() - today.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const daysAndHours = hours + (days * 24);
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    day = (formatValue(days));
    hour = (formatValue(hours));
    dayAndHour = (formatValue(daysAndHours));
    minute = (formatValue(minutes));
    second = (formatValue(seconds));

    if (isOneStyleDisplayed) {
        document.getElementById("firstStyleDay").innerHTML = day;
        document.getElementById("firstStyleHour").innerHTML = hour;
        document.getElementById("firstStyleMinute").innerHTML = minute;
        document.getElementById("firstStyleSecond").innerHTML = second;
    } else {
        document.getElementById("secondStyleHour").innerHTML = dayAndHour;
        document.getElementById("secondStyleMinute").innerHTML = minute;
        document.getElementById("secondStyleSecond").innerHTML = second;
    }
}


var specificElement = document.getElementById('activateCalculation');

if (specificElement) {
    setInterval(calcul, 1000);
} else {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var dateValue = document.getElementById("dateUser").value;
        var timeValue = document.getElementById("timeUser").value;
        var nameValue = document.getElementById("nameUser").value;

        localStorage.setItem("dateUser", JSON.stringify(dateValue));
        localStorage.setItem("timeUser", JSON.stringify(timeValue));
        localStorage.setItem("nameUser", JSON.stringify(nameValue));
    });
}

function onClickStyleOne() {
    var checkbox = document.getElementById("selectStyle");

    if (checkbox.checked) {
        isOneStyleDisplayed = false;
        document.getElementById("firstStyle").style.display = "none";
        document.getElementById("secondStyle").style.display = "grid";
    } else {
        isOneStyleDisplayed = true;
        document.getElementById("firstStyle").style.display = "grid";
        document.getElementById("secondStyle").style.display = "none";
    }
}
var buttonRemoveDate = false;
function buttonRemoveDate() {
    var button = document.getElementById("removeDate");

    if (button.addEventListener) {
        isOneStyleDisplayed = true;
        localStorage.removeItem("dateUser");
        var dateValue = localStorage.getItem("dateUser");
        dateValue;
    } else {
        isOneStyleDisplayed = false;
        document.getElementById("firstStyle").style.display = "none";
        document.getElementById("secondStyle").style.display = "grid";
    }
}
