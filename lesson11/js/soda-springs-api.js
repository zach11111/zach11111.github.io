const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=8e352917079519d2ec55d70cab208751&units=imperial";

fetch(weatherURL)
  .then((response) => response.json())

  .then((jsObject) => {
    // console.log(jsObject);
    // console.log(jsObject.list[0].main);

    document.getElementById("current_temp").textContent =
      Math.round(jsObject.list[0].main.temp);
    document.getElementById("high").textContent =
      Math.round(jsObject.list[0].main.temp_max);
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;
    document.getElementById("wind_speed").textContent =
      Math.round(jsObject.list[0].wind.speed);

    /* Five Day Forecast */

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

      const desc = forecast.weather[0].description;
      const iconsrc = 
      "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";

      document.getElementById(dayElement).textContent = forecastDay;
      document.getElementById(iconElement).setAttribute("src", iconsrc);
      document.getElementById(iconElement).setAttribute("alt", desc);
      document.getElementById(tempElement).textContent = Math.round(forecast.main.temp);
          
    }});
         /* Soda Springs Town Events */

  const townListURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(townListURL)
  .then(function (response) {
      return response.json();
  })
  
  .then(function (townlist) {
   //   console.table(townlist);
      const towns = townlist["towns"];
      for (i=0; i<towns.length; i++) {
          if (towns[i].name == "Soda Springs") {
              let eventCard = document.createElement("section");
              let townHeading = document.createElement("h4");  
              let townEvents = document.createElement("p");        
  
          townHeading.textContent = "Upcoming Events";
          townEvents.textContent = towns[i].events;
          
          eventCard.appendChild(townHeading);
          eventCard.appendChild(townEvents);        
  
          document.querySelector("div.eventCard").appendChild(eventCard); 
          
      }}
  });