$(document).ready(function(){
    $("#m_nav_trigger").click(function(){
        $(".overlay").toggleClass("active"); 
    });
    $(".closebtn").click(function(e){
        e.preventDefault();
        $(".overlay").removeClass("active");
    });
    $(".swipebox-video").swipebox();
    $('.owl-carousel').owlCarousel({
    center: false,
    items:6,
    loop:false,
    margin:0,
    responsive:{
        600:{
            items:5
        }
    }
});
    $(".desktop_menu ul li a").click(function(){
        var goTo = $($(this).attr('href'));
        var offset = goTo.offset();
        $("body").animate({scrollTop: offset.top}, 1000);
    });
});