
const allImages = document.querySelectorAll("img[data-src]");

const loadImages = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  }
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  
  allImages.forEach((img) => {
    observer.observe(img);
  });
}
else {
  allImages.forEach((img) => {
    loadImages(img);
  });
}

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
