const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.68&lon=-53.89&exclude=hourly,minute&appid=8e352917079519d2ec55d70cab208751&units=imperial&lang=en"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.current.temp;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('condition').textContent = jsObject.current.weather[0].description;
        document.getElementById('wind_speed').textContent = jsObject.current.wind_speed;
        document.getElementById('alert').textContent = jsObject.alerts;
        

        const imagesrc = 'http://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '@2x.png';  
        const desc = jsObject.current.weather[0].description;  
        document.getElementById('imagesrc').textContent = imagesrc;  
        document.getElementById('icon').setAttribute('src', imagesrc);  
        document.getElementById('icon').setAttribute('alt', desc);


        /*    Three Day Forecast   */
        const fivedayforecast = jsObject.list.filter((forecast) =>
            forecast.dt_txt.includes("18:00:00")
      );
  
      for (let i = 0; i < fivedayforecast.length; i++) {
        var forecast = fivedayforecast[i];
        var tempElement = "temp" + i;
        var iconElement = "icon" + i;
        var dayElement = "day" + i;
        var forecastDate = new Date(forecast.dt_txt);
        var forecastDay = days[forecastDate.getDay()];
  
        const desc = jsObject.current.weather[0].description; 
        const iconsrc = 'http://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '@2x.png'; 
  
        document.getElementById(dayElement).textContent = forecastDay;
        document.getElementById(iconElement).setAttribute("src", iconsrc);
        document.getElementById(iconElement).setAttribute("alt", desc);
        document.getElementById(tempElement).textContent = forecast.main.temp;
            
}});