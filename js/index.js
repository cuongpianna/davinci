jQuery(document).ready(function (e) {
    $('.home .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
    })

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('.header').addClass('hide');
            $('.header').removeClass('border');
        } else {
            $('.header').removeClass('hide');
            $('.header').addClass('border');
            if(lastScrollTop <= 10) {
                $('.header').removeClass('border');
            }
        }
        lastScrollTop = st;
    });

    $('.show-mobile.bar').click(function (){
        $('.menu-wrap').addClass('show');
        $('.header').addClass('hide');
        $('html').addClass('noscroll');
    })

    $('.show-mobile.close').click(function (){
        $('.menu-wrap').removeClass('show');
        $('.header').removeClass('hide');
        $('html').removeClass('noscroll');
    })


    $(document).on('click', '.header .menu li',function(){
        $(this).find('.sub-menu').slideToggle('fast');
    })

    $('.slider-page6 .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
    })

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTop").style.display = "block";
            $('#scrollTop').addClass('show');
        } else {
            $('#scrollTop').removeClass('show');
        }
    }

    document.getElementById('scrollTop').addEventListener("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});
