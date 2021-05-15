function currentYear(){
    const d = new Date();
    const year = d.getFullYear();

    document.querySelector('#twentyTwentyOne').textContent = year;
}

function lastModified(){
    const d = new Date();
    const year = d.getFullYear();

    const date = d.getDate();

    const day = d.getDay();
    let weekday = new Array(7);
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"

    const month = d.getMonth();
    let monthName = new Array(11);
    monthName[0] = "January"
    monthName[1] = "February"
    monthName[2] = "March"
    monthName[3] = "April"
    monthName[4] = "May"
    monthName[5] = "June"
    monthName[6] = "July"
    monthName[7] = "August"
    monthName[8] = "September"
    monthName[9] = "October"
    monthName[10] = "November"
    monthName[11] = "December"

    let fullDate = weekday[day] + ", " + date + " " + monthName[month] + " " + year

  document.getElementById('date').textContent = fullDate;
}
function toggleMenu() {
    document.getElementsByClassName("homeNav")[0].classList.toggle("menu");
}