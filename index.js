$(document).ready(function() {

    console.log('jquery is functioning');

    $(window).scroll(function () {
        var height = $(window).scrollTop();
    console.log( height );
        if (height > 600) {
            $('.navbar').addClass('navscroll');

        }else
            $('.navbar').removeClass('navscroll');

    });

});


$(document).ready(function(){
    $('.projectslides').slick({
    autoplay: true,
        autoplaySpeed: 1000
});
});