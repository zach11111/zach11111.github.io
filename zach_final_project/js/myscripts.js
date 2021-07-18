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

fetch("./json/directory.json")
.then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('business').textContent = jsObject.company.name;
        document.getElementById('phone').textContent = jsObject.company.phone;
        document.getElementById('email').textContent = jsObject.company.email;
        document.getElementById('website').textContent = jsObject.company.website;
        // document.getElementById('img').textContent = jsObject.alerts;
    });