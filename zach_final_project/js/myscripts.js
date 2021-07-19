//last visited
document.querySelector("#last_update").textContent =document.lastModified;

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
    document.getElementsByClassName("nav")[0].classList.toggle("responsive")
}

// Button links

function visitJoin(){
    window.location="join.html";
}

function visitDirectory(){
    window.location="directory.html";
}

function visitContact(){
    window.location="contact.html";
}

//Business json
// fetch("./directory.json")
// .then(response => {
// response.json();
// })
// .then(data => console.log(data));

// fetch("./directory.js")
// .then((response) => response.json())
//     .then((data) => {
//         console.log(jsObject);
//         document.getElementById('business').textContent = data.name;
//         document.getElementById('phone').textContent = data.phone;
//         document.getElementById('email').textContent = data.email;
//         document.getElementById('website').textContent = data.website;
//         // document.getElementById('img').textContent = jsObject.alerts;
//     });

// Remove weather from screen 
function removeWeather() {
    var element = document.getElementById("myDIV");
    element.classList.remove("weather-card");
  }

  document.getElementById('removeWeather').addEventListener("click", function() {
    button.style.display = "none";
    alert("You clicked me");
 }​);​
    // button.style.display = "none";