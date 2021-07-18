const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.68&lon=-53.89&exclude=hourly,minute&appid=8e352917079519d2ec55d70cab208751&units=imperial&lang=en"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.current.temp;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('condition').textContent = jsObject.current.weather[0].main;
        document.getElementById('wind_speed').textContent = jsObject.current.wind_speed;
        document.getElementById('alert').textContent = jsObject.alerts;
        

        const imagesrc = 'http://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '@2x.png';  
        const desc = jsObject.current.weather[0].description;  
        document.getElementById('imagesrc').textContent = imagesrc;  
        document.getElementById('icon').setAttribute('src', imagesrc);  
        document.getElementById('icon').setAttribute('alt', desc);
});

fetch(apiURL)
    .then(response => response.json())
    .then((jsObject) => {
               
        const timeFilter = "18:00:00";
        const forecast = jsObject.list.filter((specificTime) => specificTime.dt_txt.includes(timeFilter));
  	    
        let day = 1;
	      
        forecast.forEach(forecast => {	  
          document.getElementById('temp' + (day)).textContent = Math.round(forecast.current.temp) + " °F";
          document.getElementById('img' + (day)).src = "https://openweathermap.org/img/wn/" + forecast.current.weather[0].icon + "@2x.png";
          document.getElementById('img' + (day)).alt = forecast.current.weather[0].description;	 

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
