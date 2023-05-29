$(document).ready(function() {

    function anchorLink() {
        $('.nav a[href^="#"]').on('click', function(e){
            e.preventDefault();

            const target = $(this).attr('href');

            $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        });
    }

    function scrollTopButton() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > $(this).innerHeight()) {
                $('#scrollTopButton').fadeIn();
            } else {
                $('#scrollTopButton').fadeOut();
            }
        });

        $('#scrollTopButton').click(function() {
            $('html, body').animate({scrollTop : 0}, 800);
            return false;
        });
    }

    function slideButton() {
        $('.slide-button').click(function(e) {
            e.preventDefault();

            $(this).prev().slideToggle();
        });
    }

    anchorLink();
    scrollTopButton();
    slideButton();
});