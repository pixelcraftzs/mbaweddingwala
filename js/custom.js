
$(window).bind("load", function () {
    $(".loader-screen").hide();
}); 




$(document).ready(function () {
    

  $('.banner-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    nav:false,
    dots:false,
    animateIn: 'fadeIn',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        600:{
            items:1,
            dots:false,
            
        },
        1000:{
            items:1,
        }
    }
  })


  $('.testi-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
        }
    }
  })


  


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".header-menu").addClass("sticky");
        } else {
            $(".header-menu").removeClass("sticky");
        }
    }); 
   


    
        $(".menu-toggle").click(function () {
            $(".menu").toggleClass("slide-right");
            $(this).find('i').toggleClass('fa-bars fa-times')
        });
        
        
       
        $('.map-container')
        .click(function () {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('clicked')
        });
});



  