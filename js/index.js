$(document).ready(function(){
    setInterval(function(){
        var currentImage = $("#slider .current");
        var isLast = $(currentImage).hasClass("last");
        if(isLast === true) {
            var nextImage = $("#slider .first");
        }
        else {
            var nextImage = $(currentImage).next();
        }
        $(currentImage).removeClass("current");
        $(nextImage).addClass("current");
    }, 5000);
});