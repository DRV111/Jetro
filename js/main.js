$(function(){
    $('.slider').slick({
        arrows: true,
        asNavFor: '.thumbs',
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/next-btn.svg" alt=""></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev-btn.svg" alt=""></button>',

        


    });
    $('.thumbs').slick({
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true,

        

    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
    });
    
});