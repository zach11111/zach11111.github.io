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
fetch(apiForecastURL)
    .then(response => response.json())
    .then((jsObject) => {
               
        // Credits:
        // How to filter data from JSon source:
        // https://stackoverflow.com/questions/23720988/how-to-filter-json-data-in-javascript-or-jquery
        const timeFilter = "18:00:00";
        const forecast = jsObject.list.filter((specificTime) => specificTime.dt_txt.includes(timeFilter));
  	    
        let day = 1;
	      
        forecast.forEach(forecast => {	  
          document.getElementById('temp' + (day)).textContent = Math.round(forecast.main.temp) + " °F";
          document.getElementById('img' + (day)).src = "https://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png";
          document.getElementById('img' + (day)).alt = forecast.weather[0].description;	 

          // Credits:
          // How to extract day of the week source:
          // https://stackoverflow.com/questions/17964170/get-the-weekday-from-a-date-object-or-date-string-using-javascript/17964373
          // https://www.w3schools.com/js/js_switch.asp 
          let dayOfWeek = "";
          switch(new Date(forecast.dt_txt).getDay()){
            case 0:
              dayOfWeek = "Sun";
              break;
            case 1:
              dayOfWeek = "Mon";
              break;
            case 2:
              dayOfWeek = "Tue";
              break;
            case 3:
              dayOfWeek = "Wed";
              break;
            case 4:
              dayOfWeek = "Thu";
              break;
            case 5:
              dayOfWeek = "Fri";
              break;
            case 6:
              dayOfWeek = "Sat";
              break; 
            default:
              dayOfWeek = "Error";
              break;     
          }

          document.getElementById('day' + (day)).textContent = dayOfWeek;
	        day++;	  
	});
});
