
/*configuracões do carrosell*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})


function DROPDWON(){
    const DROWPDON = $('.dropdown-menu');
    DROWPDON.style.cssText = `
        max-height: 300px;
        width: 600px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    `
}