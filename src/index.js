import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
    $('.carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        autoplay:true,
        autoplayTimeout:5000,
    });
});

$(document).ready(function(){
    $('.menuFavItemsSlider').owlCarousel({
        loop:true,
        margin:100,
        autoWidth:true,
        startPosition:5,
        items:9,
    })
})