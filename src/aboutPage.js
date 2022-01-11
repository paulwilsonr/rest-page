import proof from './realRestaurantPicture.jpg';

export default function aboutPage () {
    let content = document.getElementById('content');
    content.innerHTML = `<h2>We are real!</h2>
    <p>Just look at this picture of our beautiful restaurant.</p>`;
    const myPic = new Image();
    myPic.setAttribute('id', 'proofPicture');
    myPic.src = proof;
    content.appendChild(myPic);
};