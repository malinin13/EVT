$(document).ready(function () {
    var offcanvas = $('.offcanvas-menu');
    var offcanvasHandler = $('.offcanvas-handler');
    var body = $('body');

    offcanvasHandler.click(function () {
        body.toggleClass('offcanvas-open');
        offcanvas.toggleClass('offcanvas-open');
    });

});