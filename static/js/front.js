(function () {



    //GNB
    $('#gnb ul li').on('mouseover focusin', function () {
        if ($(this).children('.sub-nav')) {
            $(this).find('.sub-nav').stop().fadeIn();
        }
    });
    $('#gnb ul li').on('mouseleave focusout', function () {
        $('.sub-nav').stop().fadeOut();
    })


    window.addEventListener('scroll', function() {
        if (pageYOffset > 0) document.querySelector('.header').classList.add('fixed')
        else document.querySelector('.header').classList.remove('fixed')
    })


    //MAIN HERO 
    var mainHero = new Swiper(".main-hero", {
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    //MAIN LEASE PRODUCT ITEM SLIDE -- 
    var leaseProduct = Swiper;
    var init = false;

    function swiperM() {
        var mobile = window.matchMedia('(max-width: 768px');
        var desktop = window.matchMedia('(min-width: 769px');
        if (mobile.matches) {
            if (!init) {
                init = true;
                leaseProduct = new Swiper('.lease-product-slide', {
                    loop: true,
                    pagination: {
                        el: '.lease-pager',
                        clickable: true,
                    },
                    slidesPerView: 1,
                    centeredSlides: true,
                });
            }
        }else if(desktop.matches) {
            if($('.lease-product-slide').hasClass('swiper-container-initialized')) { 
                leaseProduct.destroy(); 
                init=  false; 
            }
        }
    }

    window.addEventListener('load', function() {
        if($('.lease-product-slide').length > 0) { 
            swiperM();
        }
    })
    window.addEventListener('resize', function () {
        if($('.lease-product-slide').length > 0) { 
            swiperM();
        }
    });
    //---MAIN LEASE PRODUCT ITEM SLIDE 

    $('.close-popup').on('click', function() { 
        $(this).parent().parent().stop().fadeOut(400);
    })
    //family site
    var relSiteHt = $('.family-site ul').outerHeight();
    $('.family-site').on('click', function () {
        $(this).find('ul').css({
            top: -(relSiteHt -3)
        }).
        toggleClass('on');
    });
    $('.family-site').on('mouseleave focusout', function () {
        $(this).find('ul').removeClass('on')
    });


    //mobile menu (open)
    $('.btn-mobile').on('click', function () {
        if ($(this).hasClass('open')) mClose();
        else mOpen();
    });
    //mobile menu (close) 
    $(window).on('click', function (e) {
        if (e.target.id == 'mnav') mClose();
    });

    function mOpen() {
        $('.m-nav').stop().fadeIn().children('.container').stop().delay(100).animate({
            left: 0
        }, 300);
        $('.btn-mobile').addClass('open')
    }

    function mClose() {
        $('.m-nav .container').stop().animate({
            left: -260
        }, 300);
        $('.m-nav').stop().delay(100).fadeOut();

        $('.btn-mobile').removeClass('open')
    }

    //mobile menu------ 

})();