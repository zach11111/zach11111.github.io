const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.6724&lon=-111.9150&exclude=hourly&appid=8e352917079519d2ec55d70cab208751&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.daily.temp.max;
        document.getElementById('image-src').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('alt', desc);
        document.getElementById('alert').textContent = jsObject.alerts.event;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;

});