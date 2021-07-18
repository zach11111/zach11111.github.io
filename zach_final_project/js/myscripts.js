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

function ajaxpost () {
    var data = new FormData();
    data.append("name", document.getElementById("user-name").value);
    data.append("email", document.getElementById("user-email").value);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', "1c-server.html");
    xhr.onload = function () {
      console.log(this.response);
      console.log(this.status);
   
      if (xhr.status != 200) {
        alert("SERVER ERROR");
      }

      else {
        if (xhr.response == "OK") {
          alert("SUCCESSFUL!");
        } else {
          alert("FAILURE!");
        }
      }
    };
    xhr.send(data);

    return false;
  }