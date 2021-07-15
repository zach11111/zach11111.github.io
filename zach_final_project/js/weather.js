const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.68&lon=-53.89&exclude=hourly,minute&appid=8e352917079519d2ec55d70cab208751&units=imperial&lang=en"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.current.temp;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('condition').textContent = jsObject.current.weather[0].main;
        document.getElementById('wind_speed').textContent = jsObject.current.wind_speed;
        // document.getElementById('alert').textContent = jsObject.alerts[0].event;
        

        const imagesrc = 'http://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';  
        const desc = jsObject.weather[0].description;  
        document.getElementById('imagesrc').textContent = imagesrc;  
        document.getElementById('icon').setAttribute('src', imagesrc);  
        document.getElementById('icon').setAttribute('alt', desc);
});