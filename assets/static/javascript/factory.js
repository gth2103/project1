var prevScrollpos = window.pageYOffset;

$('document').ready(function(){

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
           $('.title').css('top', '-50px')
           $('.footer').css('bottom', '-50px')
        } else {
        	$('.title').css('top', '10px')
        	$('.footer').css('bottom', '10px')
        }

        prevScrollpos = currentScrollPos;
    }
});