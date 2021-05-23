//Date
var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[today.getDay()];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var monthName = months[today.getMonth()];

var yyyy = today.getFullYear();

today = dayName + ', ' + dd + ' ' + monthName + ' ' + yyyy;

const currentDate = new Date();
document.querySelector('#year').textContent = today;

//Hamburger Menu
function toggleMenu() 
{
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}

//Friday Pop up
if (date.getDay()==5)
{
    document.getElementById("pancake").style.display= "block" ;

}