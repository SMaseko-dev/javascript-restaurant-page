import "./styles.css";

const container = document.getElementById("content");
const heading = document.createElement("h1");
heading.textContent = "Welcome To Billa Nova";


const img = document.createElement("img");
img.src = "/restaurant.jpg";
img.alt = "Restaurant Page";


container.appendChild(heading);
container.appendChild(img);