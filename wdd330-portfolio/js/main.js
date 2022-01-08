const links = [
    { 
        label: "Week1 notes", 
        url: "../week1/index.html" 
    }
];
let list = document.getElementById("links");


links.forEach((item) => {

    let li = document.createElement("li");
    list.appendChild(li);
    let label = document.createElement("a");
    label.setAttribute("href", item.url);
    label.innerHTML = item.label; 
    li.appendChild(label);
    
});