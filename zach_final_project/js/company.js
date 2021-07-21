const requestURL = "https://zach11111.github.io/zach_final_project/json/directory.json";

fetch(requestURL)
.then(function (response) {
  return response.json();
})

.then(function (jsonObject) {
  console.table(jsonObject);
  const company = jsonObject["company"];
  for (let i = 0; i < company.length; i++) {
      let card = document.createElement("section");
      let name = document.createElement("h2");  
      let phone = document.createElement("p");
      let email = document.createElement("p"); 
      let website = document.createElement("p"); 
      let image = document.createElement("img");

    name.textContent = company[i].name;
    phone.textContent = "Phone:" + " " + company[i].phone;
    email.textContent = "Email:" + " " + company[i].email;
    website.textContent = "Website" + " " + company[i].website;
    image.setAttribute("src", company[i].img);
    image.setAttribute("alt", company[i].name);

    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(image);

    document.querySelector("div.cards").appendChild(card);            
  }
});