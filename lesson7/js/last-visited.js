var today = new Date();
var currentTime = today.getTime();

if (!localStorage.getItem("lastVisited")) {
  localStorage.setItem("lastVisited", currentTime);
  document.querySelector("#days-since-last-visit").innerHTML = "Days Since Last Visit: 0"
}
else {
  var lastVisit = localStorage.getItem("lastVisited");
  localStorage.setItem("lastVisited", currentTime);
  var daysSinceVisit = Math.floor((currentTime - lastVisit) / 86400000);
  document.querySelector("#days-since-last-visit").innerHTML = "Days Since Last Visit: " + daysSinceVisit;
}