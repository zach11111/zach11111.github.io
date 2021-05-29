let t = document.getElementById("current_temp").innerHTML;
let s = document.getElementById("wind_speed").innerHTML;
var result;

if(t <= 45 && s >= 12){
    result = Math.round(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
    
document.getElementById("windchill").innerHTML = result + " &deg;F";
}
else{
    document.getElementById("windchill").innerHTML = "N/A";
}
