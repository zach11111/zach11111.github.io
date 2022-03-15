const links = [
    { 
        label: "Week 1 notes", 
        url: "../wdd330-portfolio/week1/index.html" 
    },
    {
        label: "Week 2 notes",
        url: "../wdd330-portfolio/week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "../wdd330-portfolio/week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "../wdd330-portfolio/week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "../wdd330-portfolio/week5/index.html"
    },
    {
        label: "Week 6 notes",
        url: "../wdd330-portfolio/week6/index.html"
    },
    {
        label: "Todo app",
        url: "../wdd330-portfolio/todo_app/todo.html"
    },
    {
        label: "Week 7 notes",
        url: "../wdd330-portfolio/week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "../wdd330-portfolio/week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "../wdd330-portfolio/week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "../wdd330-portfolio/week10/index.html"
    },
    {
        label: "Final Project",
        url: "../wdd330-portfolio/Final_project/index.html"
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