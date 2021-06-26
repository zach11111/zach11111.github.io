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

//last visited

let newTime=new Date().getTime();

if(localStorage.getItem('time') !=="") {
  var past = localStorage.getItem('time');
  localStorage.setItem('time', String(newTime));
  var difference = Math.floor((newTime - past)/(86400000));
  document.getElementById('days-since-visit').innerHTML = "Days since your last visit: " + difference;
}
else {
  localStorage.setItem('time', String(newTime));
  document.getElementById("days-since-visit").innerHTML = "Days since your last Visit: 0 ";
}

//Lazy load
let images = document.querySelectorAll("img[data-src]");
function preloadImage (img){
    let src=img.getAttribute("data-src");
    if (!src){
        return
    }
    img.src=src;
    img.removeAttribute("data-src");
}
    let imgOptions= {
        threshold:1,
        rootMargin:"0px 0px 60px 0px"};

let imgObserver= new IntersectionObserver((entries,imgObserver) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
},imgOptions);