/*====================================*
    01. HEADER MENU JS
*=====================================*/ 

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $('header').addClass('nav-fixed');
        } else {
            $('header').removeClass('nav-fixed');
        }
    });

    $('.checkbtn').on('click', function() {
        $('body').toggleClass('menu-open');
    });

/*====================================*
    02. ICON CLOSE JS
*=====================================*/ 

    const toggle = document.getElementById('toggle')
    toggle.onclick=function(){
        toggle.classList.toggle('active');
    }

/*===================================*
	03. BACKGROUND IMAGE JS
*===================================*/

    /*data image src*/
    $(".background_bg").each(function() {
        var attr = $(this).attr('data-img-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }
    });


/*====================================*
    04. OWL-CAROUSEL JS
*=====================================*/ 

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        autoHeight: true,
        responsive:{
            0:{
                items:1
            },

            600:{
                items:1
            },
            850:{
                items:2
            },
            1200:{
                items:2
            }
        }
    })

/*====================================*
    05. SCROLLUP JS
*=====================================*/ 

    $(document).ready(function(){ 
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 100) { 
                $('.scrollup').fadeIn(); 
            } else { 
                $('.scrollup').fadeOut(); 
            } 
        }); 
        $('.scrollup').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 1700); 
            return false; 
        }); 
    });

/*====================================*
    06. MASONRY JS
*=====================================*/ 

    $(".grid").imagesLoaded(function() {
        $(".grid").masonry({
        itemSelector: ".grid-item"
        });
    });

/*====================================*
    07. AOS FADE-UP JS
*=====================================*/ 
      
      AOS.init({
        // offset: 400,
        duration:1000,
        once: true
      });

