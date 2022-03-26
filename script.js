window.addEventListener("load", myTimer)
function myTimer() {
var date = new Date();
var dayNumbers = date.getDay()
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var ampm =  document.getElementById("ampm");
ampm = hour <= 12 ? "AM" : "PM";
hour =  hour < 10 ? "0" + hour : hour;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById("day").innerHTML = dayNames[dayNumbers];
document.getElementById("hours").innerHTML = hour;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("ampm").innerHTML = ampm;
setTimeout(myTimer, 200)
}

