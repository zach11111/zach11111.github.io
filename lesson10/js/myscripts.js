// //last visited
// document.querySelector("#last_update").textContent =document.lastModified;

// const daylist = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const monthlist = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   var d = new Date();
//   var day = d.getDay();
//   var date = d.getDate();
//   var month = d.getMonth();
//   var year = d.getFullYear();
  
//   var dateStr = daylist[day] + ", " + date + " " + monthlist[month] + " " + year;
//   document.getElementById("dates").innerHTML = dateStr;
//   document.getElementById("copyright").innerHTML = year;
  

// //Hamburger Menu
// function toggleMenu() 
// {
//     document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
// }

// //Friday Pop up
// if (daylist[day] == 'Friday') {  
//     document.getElementById("advertising").style.display = "initials";
//   }
//   else {
//     document.getElementById("advertising").style.display = "none";
//   }


function toggleMenu(){
  document.getElementById("navigation").classList.toggle("responsive");
}

let date = new Date();
document.getElementById("currYear").innerHTML= date.getFullYear();
document.getElementById("lastmod").innerHTML="Last Update: " + document.lastModified;

if (date.getDay()==5){
    document.getElementById("advertising").style.display= "block" ;

}