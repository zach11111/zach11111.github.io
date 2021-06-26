const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8e352917079519d2ec55d70cab208751&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current_temp').textContent = jsObject.main.temp;
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind_speed').textContent = jsObject.wind.speed;

// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);

});

/* 5 Days Forecast*/
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

