const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.68&lon=-53.89&exclude=hourly,minute&appid=8e352917079519d2ec55d70cab208751&units=imperial&lang=en"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.current.temp;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('condition').textContent = jsObject.current.weather;
        document.getElementById('wind_speed').textContent = jsObject.current.wind_speed;
        

        // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        // const desc = jsObject.weather[0].description;  // note how we reference the weather array
        // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        // document.getElementById('icon').setAttribute('alt', desc);
});