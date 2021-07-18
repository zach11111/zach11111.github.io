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

function ajaxpost(){
    // (A) GET FORM DATA
    var data = new FormData();
    data.append("name", document.getElementById("user-name").value);
    data.append("email", document.getElementById("user-email").value);
   
    // (B) AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "0-dummy.php");
    // What to do when server responds
    xhr.onload = function(){ console.log(this.response); };
    xhr.send(data);
   
    // (C) PREVENT HTML FORM SUBMIT
    return false;
  }