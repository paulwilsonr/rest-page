import './style.css';
import restPic from './restaurantPicture.jpeg';

export default function mainPage () {
    const content = document.getElementById('content');
    const element = document.createElement('h1');
    element.textContent = "Itsa Restaurant!";
    element.classList.add('restName');
    content.appendChild(element);

    const myPic = new Image();
    myPic.src = restPic;
    content.appendChild(myPic);

    const restQuote = document.createElement('p');
    restQuote.innerHTML = "Itsa Restaurant is for sure a restaurant. It exist, I promise you that! <br>-Abraham Lincoln";
    content.appendChild(restQuote);


};
