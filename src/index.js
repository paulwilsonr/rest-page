import mainPage from "./mainPage";
import clearPage from "./clearPage";
import menuPage from "./menuPage";
import aboutPage from "./aboutPage";
import contactPage from "./contactPage";
import './style.css';

mainPage();


let main = document.getElementById('main');
let menu = document.getElementById('menu');
let about = document.getElementById('about');
let contact = document.getElementById('contact');

main.addEventListener('click', () => {
    clearPage();
    mainPage();
});

menu.addEventListener('click', () => {
    clearPage();
    menuPage();
});

about.addEventListener('click', () => {
    clearPage();
    aboutPage();
});

contact.addEventListener('click', () => {
    clearPage();
    contactPage();
});