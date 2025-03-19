$(document).ready(function () {
    // Function to change the image source
    function changeLogoImage() {
        if ($('body').hasClass('sticky-header')) {
            $('.mynavbar .navbar-brand img').attr('src', 'img/logo-black.svg');
        } else {
            $('.mynavbar .navbar-brand img').attr('src', 'img/logo_white.svg');
        }
    }

    // Sticky-header on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('body').addClass('sticky-header');
        } else {
            $('body').removeClass('sticky-header');
        }

        // Change the logo image when the sticky-header class changes
        changeLogoImage();
    });

    // Initial check to set the correct logo image on page load
    changeLogoImage();
});