const apiForecast="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8e352917079519d2ec55d70cab208751&units=imperial";

fetch(apiForecast)   
.then((response) => response.json())
.then((jsObject) => { 
    console.log(jsObject);
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const weatherList = jsObject.list.filter(dt => dt.dt_txt.includes('18:00:00'));

     
    for (let day = 0; day <= 4; day++) {
        let d = new Date(weatherList[day].dt_txt);
        document.getElementById(`day${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(weatherList[day].main.temp);

        const imgalt = weatherList[day].weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/wn/' + weatherList[day].weather[0].icon + "@2x.png";
        document.getElementById(`icon${day+1}`).setAttribute("src", imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute("alt", imgalt);
    }
});