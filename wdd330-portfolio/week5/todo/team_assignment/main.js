import Hikes from "./js/hikes.js";
//on load grab the array and insert it into the page
const myHikes = new Hikes("hikes");
window.addEventListener("load", () => {
  myHikes.showHikeList();
});
myHikes.hikeList;