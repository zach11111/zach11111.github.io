const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=8e352917079519d2ec55d70cab208751&units=imperial";

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

const apiURLforecast = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=8e352917079519d2ec55d70cab208751&units=imperial";
    fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const forecast = jsObject['list'];

        for (let i = 3; i < forecast.length; i += 8) {
        document.getElementById(`icon${i}`).setAttribute('src', "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png");
        document.getElementById(`temp${i}`).innerText = forecast[i].main.temp;
        }

});

     /* Fish Haven Town Events */

  const townListURL = "https://byui-cit230.github.io/weather/data/towndata.json";

  fetch(townListURL)
  .then(function (response) {
      return response.json();
  })
  
  .then(function (townlist) {
   //   console.table(townlist);
      const towns = townlist["towns"];
      for (i=0; i<towns.length; i++) {
          if (towns[i].name == "Fish Haven") {
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