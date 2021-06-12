const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var d = new Date();
  var day = d.getDay();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  
  var dateStr = daylist[day] + ", " + date + " " + monthlist[month] + " " + year;
  document.getElementById("dates").innerHTML = dateStr;
  document.getElementById("copyright").innerHTML = year;
  

//Hamburger Menu
function toggleMenu() 
{
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}

//Friday Pop up
if (daylist[day] == 'Friday') {  
    document.getElementById("advertising").style.display = "initials";
  }
  else {
    document.getElementById("advertising").style.display = "none";
  }

//The following code is for the days since last visit to the site
var currentTime = d.getTime();

//Checks last visited
if (!localStorage.getItem("lastVisited")) {
  localStorage.setItem("lastVisited", currentTime);
  document.querySelector("#days-since-visit").innerHTML = "Days Since Last Visit: 0"
}
else {
  var lastVisit = localStorage.getItem("lastVisited");
  localStorage.setItem("lastVisited", currentTime);
  //Dividing by 86,400,000 because time stamp is given in miliseconds and there are 1000 miliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, and 24 hours in a day (1000 * 60 * 60 * 24)
  var daysSinceVisit = Math.floor((currentTime - lastVisit) / 86400000);
  document.querySelector("#days-since-visit").innerHTML = "Days Since Last Visit: " + daysSinceVisit;
}


const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}