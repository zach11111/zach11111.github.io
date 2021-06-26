const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8e352917079519d2ec55d70cab208751=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        ftemp = Math.round((jsObject.main.temp - 273.15) * (9/5) + 32)
        document.getElementById('currently').textContent = ftemp;
        fhigh = Math.round((jsObject.main.temp_max - 273.15) * (9/5) + 32)
        document.getElementById('high').textContent = fhigh;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('WindSpeed').textContent = jsObject.wind.speed;

        let currentChill = windChill(ftemp, jsObject.wind.speed);

        document.querySelector('#windChill').textContent = currentChill;

    });

const days = ["1", "2", "3", "4", "5"];
const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8e352917079519d2ec55d70cab208751=imperial";
fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const nextfive = jsObject.list.filter(dt => dt.dt_txt.includes('18:00:00'));
        let img = 'https://openweathermap.org/img/w/';
        i = 0
        nextfive.forEach(day => {
            
            let forcast = new Date(day.dt_txt);
            dayOfWeek = days[i];
            document.getElementById(dayOfWeek).textContent = dayNames[forcast.getDay()];
            ftemp = Math.round((day.main.temp - 273.15) * (9/5) + 32);
            document.getElementById("temp" + days[i]).textContent = ftemp;
            i++
        })
    })
        