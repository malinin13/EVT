$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
    })

    //toggling plus/minus icons
    var accordion = $('.accordion .panel-collapse');

    accordion.on('shown.bs.collapse', function () {
        $(this).prev().find(".fa").removeClass("fa-caret-down").addClass("fa-caret-up");
        $(document.body).trigger("sticky_kit:recalc");
    });

    accordion.on('hidden.bs.collapse', function () {
        $(this).prev().find(".fa").removeClass("fa-caret-up").addClass("fa-caret-down");
        $(document.body).trigger("sticky_kit:recalc");
    });

    $('body').scrollspy({
        target: '#investors-nav',
        offset: 40
    });

    $('.investors-scrollspy-ul').stick_in_parent();

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 40
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});