import "./styles.css";

const container = document.getElementById("content");
const heading = document.createElement("h1");
heading.textContent = "Welcome To Billa Nova";


const img = document.createElement("img");
img.src = "/restaurant.jpg";
img.alt = "Restaurant Page";


container.appendChild(heading);
container.appendChild(img);

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

function displayHome(){
    container.innerHTML = "";
    container.appendChild(heading);
    container.appendChild(img);
}

function displayMenu(){
    container.innerHTML = "";
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.innerHTML = "<h1 id='menu-head'>Menu</h1><div id='menu-container'><p id='menu-items'>Wings R20<br>Burger R50<br>Steak n Chips R100<br>MilkShake R30</p></div>";

    container.appendChild(menuContainer);
}

function displayAbout(){
    container.innerHTML = "";
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    aboutContainer.innerHTML = "<h1 id='about-head'>About</h1><p>Established in 2000, our luxury restaurant offers an exquisite fusion of flavor and elegance.<br>Indulge in world-class cuisine crafted with the finest ingredients and culinary artistry.<br>Join us for an unforgettable dining experience in a setting of refined sophistication.</p>"
    container.appendChild(aboutContainer);
}

homeBtn.addEventListener("click", displayHome);
menuBtn.addEventListener("click", displayMenu);
aboutBtn.addEventListener("click", displayAbout);