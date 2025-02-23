import "./styles.css"
import pageLoad from './pageLoad';
import createRestaurantContactPage from "./contact";
import createRestaurantHomePage from "./restaurant";
import createRestaurantMenuPage from "./menu"

//Load Page
pageLoad();

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
contact.addEventListener("click" , createRestaurantContactPage);

home.addEventListener("click" , createRestaurantHomePage);

menu.addEventListener("click" , createRestaurantMenuPage);