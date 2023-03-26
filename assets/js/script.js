let previusTitle = document.title
$(window).blur(() => {
    previusTitle = document.title;
    document.title = '¡No te vayas😥! ¡Vuelve!'
})
$(window).focus(() => {
    document.title = previusTitle
})



$(document).ready(function () {
    
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Compromiso", "Liderazgo", "Credibilidad", "Dedicación", "Calidad"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Java", "Python", "C++", "Node js", "React", "Angular", "Js", "PHP", "C#/.NET"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            700:{
                items: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });

    $('.carousel-projects').owlCarousel({
        margin: 220,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 20000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            700: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                nav: false
            }
        }
    });


});