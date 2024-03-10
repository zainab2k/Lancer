$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        
    }
})



// 
$(document).ready(function () {
    $(".arrow-scroll").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#target-section-id").offset().top
        }, 1000); // Adjust the duration as needed
    });
});