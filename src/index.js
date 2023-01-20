import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
    $('.carousel').owlCarousel({
        onTranslated: changeNavColor,
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


function changeNavColor(event) {
    if(event.item.index === 3 || event.item.index  === 4){
        console.log('brown');
        if($(".navColor").hasClass('whiteText')){
            $(".navColor").toggleClass('whiteText brownText');
        };
    } else {
        console.log('white')
        $(".navColor").toggleClass("brownText whiteText");
    }
}