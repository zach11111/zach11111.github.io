// Days since last visit
let d = new Date();
var newTime = d.getTime();

if(localStorage.getItem('timeInput') !== null) {
    var pastTime = localStorage.getItem('timeInput');
    localStorage.setItem('timeInput', newTime.toString());
    var dayDifference = Math.floor((newTime - pastTime) / (1000*3600 *24));
    document.getElementById('daysSinceVisit').innerHTML = "Days Since Last Visit: " + dayDifference + " ";
}
else {
    localStorage.setItem('timeInput', newTime.toString());
    document.getElementById('daysSinceVisit').innerHTML = "Days Since Last Visit: 0 ";
}
