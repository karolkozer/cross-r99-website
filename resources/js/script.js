$(document).ready(function(){
    
    
    /***************** Aniamtion ******************/
    
    /* --- Session Fitness --- */
    $(".js--wp-1").waypoint(function(direction){
       $(".js--wp-1").addClass("animated zoomIn");
    }, {
        offset: "60%"
    });
    
    /* --- Session Sections --- */
    $(".js--wp-3").waypoint(function(direction){
       $(".js--wp-3").addClass("animated fadeInUp");
    }, {
        offset: "65%"
    });
    
    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated bounceIn");
        $(".js--wp-4").css({
            "animation-delay": "0.4s"
        })
    }, {
        offset: "65%"
    });
    
    /* --- Price Sections --- */
    $(".js--wp-6").waypoint(function(direction){
       $(".js--wp-6").addClass("animated fadeIn");
    }, {
        offset: "65%"
    });
    
     /* --- Motivation Sections --- */
    $(".js--wp-2").waypoint(function(direction){
       $(".js--wp-2").addClass("animated fadeInUp");
    }, {
        offset: "65%"
    });
    
    $(".js--wp-5").waypoint(function(direction){
       $(".js--wp-5").addClass("animated fadeInUp");
    }, {
        offset: "65%"
    });
    
     $(".js--wp-7").waypoint(function(direction){
       $(".js--wp-7").addClass("animated fadeInUp");
    }, {
        offset: "65%"
    });
    
    
    /***************** Sticky Navigation ******************/
    
    $(".js--section-fitness").waypoint(function(direction){
        if(direction === "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
        
    }, {
        offset: "9%"
    });
    
    /* --- Mobile Navigation --- */
    $(".js--mobile-nav").click(function(){
        var nav = $(".js--main-nav");
        var icon = $(".js--mobile-nav i");
        
        nav.slideToggle(200);
        
        if(icon.hasClass("ion-navicon-round")){
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        }else{
            icon.removeClass("ion-close-round");
            icon.addClass("ion-navicon-round");
        }
    });
    
    
    /***************** Scroll buttons ******************/
    $(".js--scroll-to-sign").click(function(){
        $("html, body").animate({
            scrollTop: $(".js--section-sign-up").offset().top
        }, 1000);
    });
    
    $(".js--scroll-to-fitness").click(function(){
        $("html, body").animate({
            scrollTop: $(".js--section-fitness").offset().top
        }, 1000);
    });
    
    /***************** Smooth Scrolling ******************/
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                    }, 1000);
                return false;
                }
            }
        });  
    });
    
    /***************** Modal Screen ******************/
    setTimeout(function(){
        $(".js--modal-screen").css("display", "block");
        $(".js--modal-screen").addClass("animated fadeIn");
        $(".js--modal-container").addClass("animated slideInUp");
    }, 1000);
    
    $(".close-btn").click(function(){
        $(".modal-screen").hide();
    });
    
});












